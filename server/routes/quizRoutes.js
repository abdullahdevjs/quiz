const express = require("express");
const router = express.Router();
const Quiz = require("../models/Quiz");

router.get("/quizzes", async (req, res) => {
  const quizzes = await Quiz.find();
  res.json(quizzes);
});

router.post("/create-quiz", async (req, res) => {
  const quiz = new Quiz(req.body);
  await quiz.save();
  res.json(quiz);
});

module.exports = router;