import express from "express";
const chatRouter = express.Router();

// GET - all chat
chatRouter.get("/chat", (req, res) => {
  res.send("All chat");
});

// GET - specific chat
chatRouter.get("/chat/chatroom", (req, res) => {
  res.send("Specific chat");
});

// POST - message
chatRouter.post("/chat/message", (req, res) => {
  res.send("Send message");
});

// DELETE - message
chatRouter.delete("/chat/message", (req, res) => {
  res.send("Delete message");
});

export default chatRouter;
