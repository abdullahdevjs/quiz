const mongoose = require("mongoose");
const Question = require("./models/Question");
const questions = require("./questions.json");

mongoose.connect("mongodb://127.0.0.1:27017/quizapp");

const importData = async () => {
 try{
   await Question.insertMany(questions);
   console.log("Questions Imported Successfully");
   process.exit();
 }catch(err){
   console.log(err);
 }
};

importData();