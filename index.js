const express = require("express");
const cors = require("cors");
require("dotenv").config();

const PORT = 3000;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
