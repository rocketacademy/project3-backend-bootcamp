//Enable CORS access to this server
const cors = require("cors");

//import express to read json
const express = require("express");

// import env file
require("dotenv").config();

//-----------import auth0 middleware

//-----------initializing Controllers, lowercase for the key

//-----------initializing controllers

//-----------importing DB
// const db = require("./db/models/index");
// const {} = db;

//port and express
const PORT = process.env.PORT;
const app = express();

// Enable CORS access to this server
app.use(cors());

// Enable reading JSON request bodies
app.use(express.json());

// <----- ROUTERS ----->

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
