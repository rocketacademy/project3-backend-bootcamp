const { Router } = require("express");
const listingsController = require("../controllers/listings");

const listingsRouter = Router();

listingsRouter.get("/", listingsController.getHomepageListings);
listingsRouter.get("/:user_id/homepage", listingsController.getAllListings);
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
  "/:user_id/listings/:listing_id",
  listingsController.deleteListing
);

module.exports = listingsRouter;
