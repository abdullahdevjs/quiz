const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const quizRoutes = require("./routes/quizRoutes");
const questionRoutes = require("./routes/questionRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/quizapp")
.then(()=>console.log("MongoDB Connected"));

app.get("/",(req,res)=>{
 res.send("Quiz API running");
});

app.use("/api",quizRoutes);
app.use("/api",questionRoutes);

app.listen(5000,()=>{
 console.log("Server running on port 5000");
});