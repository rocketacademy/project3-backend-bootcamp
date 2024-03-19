const express = require("express");
const cors = require("cors");
require("dotenv").config();

// importing Routers
const UsersRouter = require("./routers/usersRouter");

// importing Controllers
const UsersController = require("./controllers/usersController");

//importing DB
const db = require("./db/models/index");
const { user } = db;

// Initializing Controllers
const userController = new UsersController(user);

// Initializing Routers
const usersRouter = new UsersRouter(userController);

const PORT = 3000;
const app = express();

// Enable CORS access to this server
app.use(cors());

// Enable reading JSON request bodies
app.use(express.json());

// Enable and use usersRouter
app.use("/users", usersRouter.routes());

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
