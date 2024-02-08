const express = require("express");
const router = express.Router();

class TalentRouter {
  constructor(talentController, checkJwt) {
    this.controller = talentController;
    this.checkJwt = checkJwt;
  }

  routes() {
    router.get("/", this.controller.getAll.bind(this.controller));
    router.post(
      "/",
      this.checkJwt,
      this.controller.addTalent.bind(this.controller)
    );
    router.post(
      "/:talentId",
      this.controller.updateTalent.bind(this.controller)
    );
    return router; // Return the router instance
  }
}

module.exports = TalentRouter;
