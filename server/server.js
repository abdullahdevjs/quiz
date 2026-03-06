const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const quizRoutes = require("./routes/quizRoutes");
const questionRoutes = require("./routes/questionRoutes");

const app = express();

app.use(cors());
app.use(express.json());

/* MongoDB Connection */

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB Atlas Connected"))
.catch(err=>console.log(err));

/* Test route */

app.get("/",(req,res)=>{
 res.send("Quiz API running");
});

/* Routes */

app.use("/api",quizRoutes);
app.use("/api",questionRoutes);

/* Render PORT */

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
 console.log(`Server running on port ${PORT}`);
});