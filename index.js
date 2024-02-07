// import cors from "cors";
// import express from "express";
import authController from "./controllers/authController.js";
import homeController from "./controllers/homeController.js";
import chatController from "./controllers/chatController.js";
import profileController from "./controllers/profileController.js";

const PORT = 3000;
const app = express();
const cors = require("cors");
const express = require("express");

// Middleware / cors
app.use(cors());

// AUTHENTICATION ROUTES
app.get("/authentication", authController.getCurrentUser);
app.post("/authentication", authController.postCurrentUser);

// HOMEPAGE ROUTES
app.get("/home/listing", homeController.getListing);
app.post("/home/listing", homeController.postListing);
app.delete("/home/listing", homeController.deleteListing);
app.get("/home/search", homeController.searchListing);
app.get("/home/category", homeController.getListingCategory);

// CHATPAGE ROUTES
app.get("/chat", chatController.getAllChat);
app.get("/chat/chatroom", chatController.getSpecificChat);
app.post("/chat/message", chatController.postMessage);
app.delete("/chat/message", chatController.deleteMessage);

// PROFILEPAGE ROUTES
app.get("/profile", profileController.getUserProfile);

// Start the server
app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
