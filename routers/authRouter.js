import express from "express";
const authRouter = express.Router();

// GET - current user
authRouter.get("/authentication", (req, res) => {
  res.send("Get current user");
});

// POST - current user
authRouter.post("/authentication", (req, res) => {
  res.send("Post current user");
});

export default authRouter;
