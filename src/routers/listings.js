const { Router } = require("express");
const listingsController = require("../controllers/listings");

const listingsRouter = Router();

listingsRouter.get('/', listingsController.getAllListings)

module.exports = listingsRouter;