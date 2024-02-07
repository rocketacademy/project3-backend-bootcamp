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
const { talent, benefit, employer } = db;

//import controllers
const TalentController = require("./controllers/TalentController");
const BenefitController = require("./controllers/BenefitController");
const EmployerController = require("./controllers/EmployerController");

//import router
const TalentRouter = require("./routers/TalentRouter");
const BenefitRouter = require("./routers/BenefitRouter");
const EmployerRouter = require("./routers/EmployerRouter");

//port and express
const PORT = process.env.PORT;
const app = express();

// Enable CORS access to this server
app.use(cors());
// Enable reading JSON request bodies
app.use(express.json());

//initialise contollers
const talentController = new TalentController(talent);
const benefitController = new BenefitController(benefit);
const employerController = new EmployerController(employer);

//initialise router
const talentRouter = new TalentRouter(talentController).routes();
const benefitRouter = new BenefitRouter(benefitController).routes();
const employerRouter = new EmployerRouter(employerController).routes();

// <----- USAGE----->
app.use("/talents", talentRouter);
app.use("/benefits", benefitRouter);
app.use("/employers", employerRouter);

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
