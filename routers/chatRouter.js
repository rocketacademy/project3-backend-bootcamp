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
    router.post("/image", this.controller.createImage.bind(this.controller));
    router.post(
      "/chatroom",
      this.controller.createChatroom.bind(this.controller)
    );
    return router;
  }
}

module.exports = ChatRouter;
