const express = require("express");
const router = express.Router();

class NotificationRouter {
  constructor(controller) {
    this.controller = controller;
  }

  routes() {
    return router;
  }
}
module.exports = NotificationRouter;
