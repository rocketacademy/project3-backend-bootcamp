const express = require("express");
const router = express.Router();

class ChatRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    router.post(
      "/message",
      this.controller.createMessage.bind(this.controller)
    );
    return router;
  }
}

module.exports = ChatRouter;
