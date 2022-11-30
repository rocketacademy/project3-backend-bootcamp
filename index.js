const cors = require("cors");
const express = require("express");
require("dotenv").config();

// importing Routers
const ChaptersRouter = require("./routers/chaptersRouter");
const SectionsRouter = require("./routers/sectionsRouter");
const CadetsRouter = require("./routers/cadetsRouter");
const CadetSectionRouter = require("./routers/cadet-section-router");

// importing Controllers
const ChaptersController = require("./controllers/chaptersController");
const SectionsController = require("./controllers/sectionsController");
const CadetsController = require("./controllers/cadetsController");
const CadetSectionController = require("./controllers/cadet-section-controller");

//import DB
const db = require("./db/models/index");
const {
  appointment,
  blockedDate,
  cadetChapter,
  cadetSection,
  cadet,
  chapter,
  comment,
  memoEntry,
  section,
  note,
  sl,
} = db;

// initializing Controllers -> note the lowercase for the first word
const chaptersController = new ChaptersController(chapter);
const sectionsController = new SectionsController(section);

// for cadets, get
const cadetsController = new CadetsController(
  cadet,
  cadetSection,
  cadetChapter,
  section
);
const cadetSectionController = new CadetSectionController(
  cadetSection,
  cadet,
  section
);

// initializing Routers
const chaptersRouter = new ChaptersRouter(chaptersController).routes();
const sectionsRouter = new SectionsRouter(sectionsController).routes();
const cadetsRouter = new CadetsRouter(cadetsController).routes();
const cadetSectionRouter = new CadetSectionRouter(
  cadetSectionController
).routes();

const PORT = process.env.PORT;
const app = express();

//enable CORS access to this server
app.use(cors());

//enable reading JSON request bodies
app.use(express.json());

//enable and use router
app.use("/chapters", chaptersRouter);
app.use("/sections", sectionsRouter);
app.use("/cadets", cadetsRouter);
app.use("/cadetSection", cadetSectionRouter);

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
