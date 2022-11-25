const cors = require("cors");
const express = require("express");
require("dotenv").config();

// importing Routers
const ChaptersRouter = require("./routers/chaptersRouter");
const ModulesRouter = require("./routers/modulesRouter");

// importing Controllers
const ChaptersController = require("./controllers/chaptersController");
const ModulesController = require("./controllers/modulesController");

//import DB
const db = require("./db/models/index");
const {
  appointment,
  blocked_date,
  cadet_chapter,
  cadet_module,
  cadet,
  chapter,
  comment,
  memo_entry,
  module,
  note,
  sl,
} = db;

// initializing Controllers -> note the lowercase for the first word
const chaptersController = new ChaptersController(chapter);
const modulesController = new ModulesController(module);

// initializing Routers
const chaptersRouter = new ChaptersRouter(chaptersController).routes();
const modulesRouter = new ModulesRouter(modulesController).routes();

const PORT = process.env.PORT;
const app = express();

//enable CORS access to this server
app.use(cors());

//enable reading JSON request bodies
app.use(express.json());

//enable and use router
app.use("/chapters", chaptersRouter);
app.use("/modules", modulesRouter);

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
