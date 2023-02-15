const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { errorHandler } = require("./middleware");
const appRouter = require("./routers");

const PORT = process.env.PORT;
const app = express();
app.use(cors());
app.use(express.json());



app.use(appRouter);
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
