require("express-async-errors");
const { Router } = require("express");
// const sightingsRouter = require("./sightings");
// const commentsRouter = require("./comments");
// const likesRouter = require("./likes");
// const categoriesRouter = require("./categories");
const listingsRouter = require("./listings")

const appRouter = Router();

appRouter.use("/", listingsRouter)
// appRouter.use("/sightings", sightingsRouter);
// appRouter.use("/comments", commentsRouter);
// appRouter.use("/likes", likesRouter);
// appRouter.use("/categories", categoriesRouter);

module.exports = appRouter;
