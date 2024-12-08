const express = require("express");
const router = express.Router();

class BenefitRouter {
  constructor(benefitController) {
    this.controller = benefitController;
  }

  routes() {
    router.get("/", this.controller.getAll.bind(this.controller));
    return router; // Return the router instance
  }
}

module.exports = BenefitRouter;
