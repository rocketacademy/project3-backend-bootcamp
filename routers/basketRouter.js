const express = require("express");
const router = express.Router();

class BasketRouter {
  constructor(controller) {
    this.controller = controller;
  }

  routes() {
    return router;
  }
}
module.exports = BasketRouter;
