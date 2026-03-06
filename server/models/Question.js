const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  quizId: String,
  subject: String,   // new field
  question: String,
  options: [String],
  answer: Number,
  marks: Number,
  negative: Number
});

module.exports = mongoose.model("Question", QuestionSchema);