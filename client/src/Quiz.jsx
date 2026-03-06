import { useEffect,useState } from "react"
import Footer from "./components/Footer"
import "./App.css"

function Quiz(){

const [questions,setQuestions]=useState([])
const [currentQuestion,setCurrentQuestion]=useState(0)

const [score,setScore]=useState(0)

const [selected,setSelected]=useState(null)

const [answered,setAnswered]=useState(false)

const [time,setTime]=useState(10)

const [quizFinished,setQuizFinished]=useState(false)

const [correctCount,setCorrectCount]=useState(0)

const [wrongCount,setWrongCount]=useState(0)

const [skippedCount,setSkippedCount]=useState(0)

const [loading,setLoading]=useState(true)

useEffect(()=>{

fetch("http://localhost:5000/api/questions/69aafdfae93f3f2965f14448")
.then(res=>res.json())
.then(data=>{
setQuestions(data)
setLoading(false)
})

},[])

useEffect(()=>{

if(quizFinished) return

if(time===0){

handleSkip()

return

}

const timer=setInterval(()=>{

setTime(prev=>prev-1)

},1000)

return()=>clearInterval(timer)

},[time,quizFinished])

if(loading){

return(

<div className="loading">
Loading Quiz...
<Footer/>
</div>

)

}

const q=questions[currentQuestion]

function handleAnswer(index){

if(answered) return

setSelected(index)

setAnswered(true)

if(index===q.answer){

setScore(prev=>prev+q.marks)

setCorrectCount(prev=>prev+1)

}else{

setScore(prev=>prev-q.negative)

setWrongCount(prev=>prev+1)

}

}

function nextQuestion(){

setSelected(null)

setAnswered(false)

setTime(10)

if(currentQuestion+1>=questions.length){

setQuizFinished(true)

}else{

setCurrentQuestion(prev=>prev+1)

}

}

function handleSkip(){

setSkippedCount(prev=>prev+1)

setSelected(null)

setAnswered(false)

setTime(10)

if(currentQuestion+1>=questions.length){

setQuizFinished(true)

}else{

setCurrentQuestion(prev=>prev+1)

}

}

function restartQuiz(){

setCurrentQuestion(0)

setScore(0)

setSelected(null)

setAnswered(false)

setTime(10)

setQuizFinished(false)

setCorrectCount(0)

setWrongCount(0)

setSkippedCount(0)

}

function getOptionClass(i){

if(!answered) return "option"

if(i===q.answer) return "option correct"

if(i===selected) return "option wrong"

return "option"

}

if(quizFinished){

const total=questions.length

const accuracy=Math.round((correctCount/total)*100)

return(

<div className="wrapper">

<div className="quiz-card result">

<h1>Quiz Completed</h1>

<h2>Your Score: {score}</h2>

<div className="result-grid">

<div>

<h3>Total Questions</h3>

<p>{total}</p>

</div>

<div>

<h3>Correct</h3>

<p>{correctCount}</p>

</div>

<div>

<h3>Wrong</h3>

<p>{wrongCount}</p>

</div>

<div>

<h3>Skipped</h3>

<p>{skippedCount}</p>

</div>

<div>

<h3>Accuracy</h3>

<p>{accuracy}%</p>

</div>

</div>

<button
className="restart-btn"
onClick={restartQuiz}
>
Restart Quiz
</button>

</div>

<Footer/>

</div>

)

}

return(

<div className="wrapper">

<div className="quiz-card">

<div className="quiz-header">

<h3>
Question {currentQuestion+1} / {questions.length}
</h3>

<div className="timer">

{time}

</div>

<div className="score">

Score: {score}


</div>

</div>

<div className="progress">

<div
className="progress-bar"
style={{
width:`${(currentQuestion/questions.length)*100}%`
}}
></div>

</div>

<p className="question">

{q.question}

</p>

<div className="options">

{q.options.map((opt,i)=>(

<div
key={i}
className={getOptionClass(i)}
onClick={()=>handleAnswer(i)}
>

<span className="option-letter">

{String.fromCharCode(65+i)}

</span>

<span className="option-text">

{opt}

</span>

</div>

))}

</div>

<div className="buttons">

<button
onClick={nextQuestion}
disabled={!answered}
>
Next
</button>

<button
className="skip"
onClick={handleSkip}
>
Skip
</button>

</div>

</div>

<Footer/>

</div>

)

}

export default Quiz