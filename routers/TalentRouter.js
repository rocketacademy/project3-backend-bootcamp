const express = require("express");
const router = express.Router();

class TalentRouter {
  constructor(talentController, checkJwt) {
    this.talentController = talentController;
    this.checkJwt = checkJwt;
  }

  routes() {
    router.get("/", this.talentController.getAll.bind(this.talentController));
    router.post(
      "/",
      this.checkJwt,
      this.talentController.addTalent.bind(this.talentController)
    );
    router.post(
      "/:talentId",
      this.talentController.updateTalent.bind(this.talentController)
    );

    // <------------------------ RESUME ------------------------ >

    router.post(
      "/:talentId/resume",
      this.talentController.addResume.bind(this.talentController)
    );
    router.get(
      "/:talentId/resume",
      this.talentController.getResume.bind(this.talentController)
    );

    // <------------------------ WORK EXPERIENCE ------------------------ >

    router.post(
      "/:talentId/workexperience",
      this.talentController.addWorkExperience.bind(this.talentController)
    );
    router.get(
      "/:talentId/workexperience",
      this.talentController.getWorkExperiences.bind(this.talentController)
    );

    // <------------------------ SKILL SET ------------------------ >

    router.post(
      "/:talentId/skill",
      this.talentController.addSkillSet.bind(this.talentController)
    );
    router.get(
      "/:talentId/skill",
      this.talentController.getSkillSet.bind(this.talentController)
    );

    // <------------------------ EDUCATION ------------------------ >

    router.post(
      "/:talentId/education",
      this.talentController.addEducation.bind(this.talentController)
    );
    router.get(
      "/:talentId/education",
      this.talentController.getEducation.bind(this.talentController)
    );

    // <------------------------ BENEFIT ------------------------ >

    router.get(
      "/:talentId",
      this.talentController.getBenefit.bind(this.talentController)
    );

    router.get(
      "/:talentId",
      this.talentController.addBenefit.bind(this.talentController)
    );

    return router; // Return the router instance
  }
}

module.exports = TalentRouter;
