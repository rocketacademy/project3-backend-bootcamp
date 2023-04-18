const express = require("express");
require("dotenv").config();
const cors = require("cors");

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const db = require("./db/models/index");
const { users, questionnaires, student_answers, tests } = db;

const UserController = require("./Controllers/UserController");
const QuestionnaireController = require("./Controllers/QuestionnaireController");
const AnswerController = require("./Controllers/AnswerController");
const TestController = require("./Controllers/TestController");
const UserRouter = require("./Routers/UserRouter");
const QuestionnaireRouter = require("./Routers/QuestionnaireRouter");
const AnswerRouter = require("./Routers/AnswerRouter");
const TestRouter = require("./Routers/TestRouter");

const userController = new UserController(users);
const questionnaireController = new QuestionnaireController(questionnaires);
const answerController = new AnswerController(student_answers);
const testController = new TestController(tests);

const userRouter = new UserRouter(userController, express).route();
const questionnaireRouter = new QuestionnaireRouter(questionnaireController, express).route();
const answerRouter = new AnswerRouter(answerController, express).route();
const testRouter = new TestRouter(testController, express).route();

app.use("/students", userRouter);
app.use("/questionnaire", questionnaireRouter);
app.use("/answers", answerRouter);
app.use("/test", testRouter)

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
