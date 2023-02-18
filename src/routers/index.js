require("express-async-errors");
const { Router } = require("express");

const listingsRouter = require("./listings");
const usersRouter = require("./users");

const appRouter = Router();

appRouter.use("/", listingsRouter);
appRouter.use("/", usersRouter);

module.exports = appRouter;
