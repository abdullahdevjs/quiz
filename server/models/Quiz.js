const mongoose = require("mongoose");

const QuizSchema = new mongoose.Schema({
  title: String,
  totalMarks: Number,
  negativeMarks: Number,
  timeLimit: Number
});

module.exports = mongoose.model("Quiz", QuizSchema);