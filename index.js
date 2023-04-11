const cors = require("cors");
const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// importing Routers

// importing Controllers

// importing DB
const db = require("./db/models/index.js");

// initializing Controllers -> note the lowercase for the first word

// inittializing Routers

// using the routers

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
