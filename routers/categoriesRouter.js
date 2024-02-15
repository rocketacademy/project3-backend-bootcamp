const express = require("express");
const router = express.Router();

class CategoriesRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    router.get('/', this.controller.getAll.bind(this.controller))
    router.post("/", this.controller.createOne.bind(this.controller));
    router.get('/name/:categoryName', this.controller.getByName.bind(this.controller))
    router.get('/:categoryId', this.controller.getById.bind(this.controller))
    return router;
  }
}

module.exports = CategoriesRouter;
