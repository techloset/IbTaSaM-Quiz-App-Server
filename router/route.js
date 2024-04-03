import { Router } from "express";
const router = Router();

// import contrillers
import * as controller from "../controllers/controller.js";

router
  .route("/questions")
  .get(controller.getQuestions)
  .post(controller.insertQuestion)
  .delete(controller.dropQuestion);

router
  .route("/result")
  .get(controller.getResult)
  .post(controller.storeResult)
  .delete(controller.dropResult);

export default router;
