const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = 3000;

const app = express();

// IMPORT ROUTER
const UsersRouter = require("./routers/usersRouter");
const ChatRouter = require("./routers/chatRouter");

// IMPORT CONTROLLER
const UsersController = require("./controllers/userController");
const ChatController = require("./controllers/chatController");

// IMPORT DB
const db = require("./models/index");
const {
  user,
  listing,
  category,
  chat_image,
  chatroom_message,
  chatroom,
  like,
  listing_image,
  order,
  review,
} = db;

// INIT CONTROLLER
const usersController = new UsersController(user);
const chatController = new ChatController(
  chat_image,
  chatroom_message,
  chatroom,
  listing,
  user
);
// ,like, listing, chatroom, chatroom_message, order

// INIT ROUTERS
const usersRouter = new UsersRouter(usersController).routes();
const chatRouter = new ChatRouter(chatController).routes();

// Middleware
app.use(cors());
app.use(express.json());
// Enable and use routers
app.use("/users", usersRouter);
app.use("/chat", chatRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
