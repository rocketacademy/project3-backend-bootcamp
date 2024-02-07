import express from "express";
const homeRouter = express.Router();

// GET - listing
homeRouter.get("/home/listing", (req, res) => {
  res.send("See listing");
});

// POST - listing
homeRouter.post("/home/listing", (req, res) => {
  res.send("Post listing");
});

// DELETE - listing
homeRouter.delete("/home/listing", (req, res) => {
  res.send("Delete listing");
});

// GET - search
homeRouter.get("/home/search", (req, res) => {
  res.send("Search listing");
});

// GET - category
homeRouter.get("/home/category", (req, res) => {
  res.send("Listing category");
});

export default homeRouter;
