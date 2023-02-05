const express = require("express");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT;
const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
