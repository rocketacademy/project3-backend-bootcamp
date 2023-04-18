const express = require("express");
require("dotenv").config();
const cors = require("cors");

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const db = require("./db/models/index");
const { users, questionnaires } = db;

const UserController = require("./Controllers/UserController");
const QuestionnaireController = require("./Controllers/QuestionnaireController");
const UserRouter = require("./Routers/UserRouter");
const QuestionnaireRouter = require("./Routers/QuestionnaireRouter");

const userController = new UserController(users);
const questionnaireController = new QuestionnaireController(questionnaires);

const userRouter = new UserRouter(userController, express).route();
const questionnaireRouter = new QuestionnaireRouter(questionnaireController, express).route();

app.use("/students", userRouter);
app.use("/questionnaire", questionnaireRouter)

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
