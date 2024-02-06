// import env file
require("dotenv").config();
//Enable CORS access to this server
const cors = require("cors");
//import express to read json
const express = require("express");

//import auth0 middleware
const auth = require("./middlewares/auth");

//import DB
const db = require("./db/models/index");
const { talent } = db;

//import controllers
const TalentController = require("./controllers/TalentController");

//import router
const TalentRouter = require("./routers/TalentRouter");

//port and express
const PORT = process.env.PORT;
const app = express();

// Enable CORS access to this server
app.use(cors());
// Enable reading JSON request bodies
app.use(express.json());

//initialise contollers
const talentController = new TalentController(talent);

//initialise router
const talentRouter = new TalentRouter(talentController).routes();

// <----- USAGE----->
app.use("/talents", talentRouter);

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
