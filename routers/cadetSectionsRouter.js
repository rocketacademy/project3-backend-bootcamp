const express = require("express");
const router = express.Router();

class CadetSectionsRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    // we will insert routes into here later on
    router.get("/", this.controller.getAll.bind(this.controller));
    router.post("/", this.controller.insertOne.bind(this.controller));
    router.get(
      "/complete-status",
      this.controller.getOne.bind(this.controller)
    );

    return router;
  }
}

module.exports = CadetSectionsRouter;