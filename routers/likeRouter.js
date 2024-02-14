const express = require("express");
const router = express.Router();

class LikeRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    router.post("/like/:userId/:listingId", this.controller.likeListing);
    router.delete("/unlike/:userId/:listingId", this.controller.unLikeListing);

    return router;
  }
}

module.exports = LikeRouter;
