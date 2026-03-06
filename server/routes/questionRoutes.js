const express = require("express");
const router = express.Router();
const Question = require("../models/Question");

router.get("/questions/:quizId", async (req,res)=>{
 const questions = await Question.find({quizId:req.params.quizId});
 res.json(questions);
});

router.post("/add-question", async (req,res)=>{
 const question = new Question(req.body);
 await question.save();
 res.json(question);
});

module.exports = router;