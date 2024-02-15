const express = require("express");
const router = express.Router();

class ReviewsRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    router.delete("/delete/:listingId/:userId", this.controller.deleteOne);
    router.post("/", this.controller.createOne);
    return router;
  }
}

module.exports = ReviewsRouter;
