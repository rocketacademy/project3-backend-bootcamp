const express = require("express");
const router = express.Router();

class LikesRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {

    router.get("/count", this.controller.getCount)
    router.get("/list/:userId", this.controller.getLikesList)
    router.delete("/delete/:listingId/:userId", this.controller.deleteOne)
    router.post("/", this.controller.createOne)

    return router;
  }
}

module.exports = LikesRouter;