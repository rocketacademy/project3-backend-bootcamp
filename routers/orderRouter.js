const express = require("express");
const router = express.Router();

class OrderRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    // routes

    return router;
  }
}

module.exports = OrderRouter;
