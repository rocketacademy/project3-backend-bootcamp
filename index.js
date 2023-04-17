const express = require("express");
require("dotenv").config();
const cors = require("cors");

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const db = require("./db/models/index");
const { users } = db;

const UserController = require("./Controllers/UserController");
const UserRouter = require("./Routers/UserRouter");

const userController = new UserController(users);
const userRouter = new UserRouter(userController, express);

app.use("/students", userRouter.route());

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
