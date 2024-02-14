const express = require("express");
const router = express.Router();

class ReviewRouter {
  constructor(controller) {
    this.controller = controller;
  }

  routes() {
    router.post("/review/:userId/:listingId", this.controller.createReview);
    router.get("/reviews/:itemId/:listingId", this.controller.getReview);
    router.delete("/reviews/:itemId/:listingId", this.controller.deleteReview);

    return router;
  }
}

module.exports = ReviewRouter;
