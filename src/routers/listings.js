const { Router } = require("express");
const listingsController = require("../controllers/listings");
const authMiddleware = require("../middleware/auth");

const listingsRouter = Router();

//Only the welcome page no need auth
listingsRouter.get("/", listingsController.getWelcomePageListings);

//everything below requires auth
listingsRouter.use(authMiddleware);
listingsRouter.get("/listings", listingsController.getAllListings);
listingsRouter.get("/:user_id/profile", listingsController.getUserListings);
listingsRouter.get(
  "/:user_id/listings/:listing_id",
  listingsController.getOneListing
);
listingsRouter.post(
  "/:user_id/createlisting",
  listingsController.createListing
);
listingsRouter.put(
  "/:user_id/listings/:listing_id",
  listingsController.editListing
);
listingsRouter.delete(
  "/delete/:listing_id",
  listingsController.deleteListing
);

module.exports = listingsRouter;
