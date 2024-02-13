const express = require("express");
const router = express.Router();

class ListingsRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    router.get(
      "/paginated",
      this.controller.getPaginated
    );
    router.get("/", this.controller.getAll);
    router.post("/", this.controller.createOne.bind(this.controller));
    router.get(
      "/user/:userId",
      this.controller.getListingsOfUser.bind(this.controller)
    );
    router.get("/:listingId", this.controller.getOne.bind(this.controller));

    return router;
  }
}

module.exports = ListingsRouter;
