const express = require("express");
const router = express.Router();

class TalentRouter {
  constructor(talentController) {
    this.controller = talentController;
  }

  routes() {
    router.get("/", this.controller.getAll.bind(this.controller));
    router.post("/", this.controller.addTalent.bind(this.controller));
    router.post(
      "/:talentId",
      this.controller.updateTalent.bind(this.controller)
    );
    return router; // Return the router instance
  }
}

module.exports = TalentRouter;
