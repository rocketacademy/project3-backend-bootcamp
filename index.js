// import env file
require("dotenv").config();
//Enable CORS access to this server
const cors = require("cors");
//import express to read json
const express = require("express");

//import auth0 middleware
const { auth } = require("express-oauth2-jwt-bearer");

// Authorization middleware. When used, the Access Token must
// exist and be verified against the Auth0 JSON Web Key Set.
const checkJwt = auth({
  audience: process.env.AUTH_AUDIENCE,
  issuerBaseURL: process.env.AUTH_ISSUER_BASE_URL,
});

//import DB
const db = require("./db/models/index");
const {
  talent,
  benefit,
  employer,
  talentResume,
  talentWorkExperience,
  talentSkillSet,
  talentEducation,
  jobListing,
  application,
} = db;

//import controllers
const TalentController = require("./controllers/TalentController");
const BenefitController = require("./controllers/BenefitController");
const EmployerController = require("./controllers/EmployerController");

//import router
const TalentRouter = require("./routers/TalentRouter");
const BenefitRouter = require("./routers/BenefitRouter");
const EmployerRouter = require("./routers/EmployerRouter");

//express
const app = express();

// Enable CORS access to this server
app.use(cors());
// Enable reading JSON request bodies
app.use(express.json());

//initialise contollers
const talentController = new TalentController(
  talent,
  talentResume,
  talentWorkExperience,
  talentSkillSet,
  talentEducation,
  benefit,
  employer,
  jobListing,
  application
);
const benefitController = new BenefitController(benefit, employer);
const employerController = new EmployerController(
  employer,
  jobListing,
  benefit,
  application
);

//initialise router
const talentRouter = new TalentRouter(talentController, checkJwt).routes();
const benefitRouter = new BenefitRouter(benefitController).routes();
const employerRouter = new EmployerRouter(employerController).routes();

// <----- USAGE----->
// talent and employer is singular to standardise with frontend's nav bar.

app.use("/talent", talentRouter);
app.use("/benefits", benefitRouter);
app.use("/employer", employerRouter);

app.listen(process.env.PORT, () => {
  console.log(`Express app listening on port ${process.env.PORT}!`);
});
