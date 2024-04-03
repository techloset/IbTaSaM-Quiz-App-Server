import mongoose from "mongoose";
const { Schema } = mongoose;
const nextQuestionModel = new Schema({
  questions: {
    type: Array,
  },
  answers: {
    type: Array,
  },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("NextQuestion", nextQuestionModel);
