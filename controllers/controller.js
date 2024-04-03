import Results from "../models/resultSchema.js";
import NextQuestion from "../models/nextQuestionSchema.js";

// get all questions
export async function getQuestions(req, res) {
  try {
    const q = await NextQuestion.find();
    res.json(q);
  } catch (error) {
    res.json({ error });
  }
}

// insert all questions

export async function insertQuestion(req, res) {
  try {
    const { questions, answers } = req.body;

    NextQuestion.findOneAndUpdate(
      {},
      {
        $push: { questions: { $each: questions }, answers: { $each: answers } },
        // $push: { answers: { $each: answers } },
      },
      { upsert: true }
    )
      .then(function (err, data) {
        res.json({ msg: "Next Saved Successfully...!" });
      })
      .catch(function (err) {
        console.log(err);
        res.json({ msg: "erro" });
      });
  } catch (error) {
    res.json({ error });
    res.json({ msg: "erro" });
  }
}

// Delete all questions

export async function dropQuestion(req, res) {
  try {
    const { id } = req.body;
    const result = await NextQuestion.updateOne(
      {},
      { $pull: { questions: { id: id } } }
    );
    if (result.modifiedCount > 0) {
      res.json("Question deleted successfully.");
    } else {
      res.json("Question with the provided ID was not found.");
    }
  } catch (error) {
    res.json({ error });
  }
}

// get all result
export async function getResult(req, res) {
  try {
    const r = await Results.find();
    res.json(r);
  } catch (error) {
    res.json({ error });
  }
}

// post all result
export async function storeResult(req, res) {
  try {
    const { username, result, attempts, points, achived } = req.body;
    if (!username && !result) throw new Error("Data Not Provided...!");

    Results.create({ username, result, attempts, points, achived })
      .then(function (err, data) {
        res.json({ msg: "Result Saved Successfully...!" });
      })
      .catch(function (err) {
        console.log(err);
      });
  } catch (error) {
    res.json({ error });
  }
}

// Delete all result

export async function dropResult(req, res) {
  try {
    await Results.findOneAndDelete({ _id: "6607db5705a3088c87cd379a" });
    res.json({ msg: "Result Deleted Successfully...!" });
  } catch (error) {
    res.json({ error });
  }
}
