import express from "express";
const profileRouter = express.Router();

// GET - user profile
profileRouter.get("/profile", (req, res) => {
  res.send("User profile");
});

export default profileRouter;
