const express = require("express");
const router = express.Router();

class EmployerRouter {
  constructor(employerController) {
    this.controller = employerController;
  }

  routes() {
    router.get("/", this.controller.getAll.bind(this.controller));
    return router; // Return the router instance
  }
}

module.exports = EmployerRouter;
