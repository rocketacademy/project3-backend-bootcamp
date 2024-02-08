const express = require("express");
const router = express.Router();

class CategoriesRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    router.post("/", this.controller.createOne.bind(this.controller));
    return router;
  }
}

module.exports = CategoriesRouter;
