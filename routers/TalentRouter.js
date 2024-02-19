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

    router.put(
      "/:talentId",
      this.checkJwt,
      this.talentController.editTalentName.bind(this.talentController)
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
    router.put(
      "/:talentId/resume",
      this.talentController.updateResume.bind(this.talentController)
    );

    // <------------------------ WORK EXPERIENCE ------------------------ >

    router.post(
      "/:talentId/workexperience",
      this.checkJwt,
      this.talentController.addWorkExperience.bind(this.talentController)
    );
    router.get(
      "/:talentId/workexperience",
      this.talentController.getWorkExperiences.bind(this.talentController)
    );

    router.put(
      "/:talentId/workexperience",
      this.checkJwt,
      this.talentController.updateWorkExp.bind(this.talentController)
    );

    router.delete(
      "/:talentId/workexperience/:workExpID",
      this.checkJwt,
      this.talentController.deleteWorkExp.bind(this.talentController)
    );

    // <------------------------ SKILL SET ------------------------ >

    router.post(
      "/:talentId/skill",
      this.checkJwt,
      this.talentController.addSkillSet.bind(this.talentController)
    );
    router.get(
      "/:talentId/skill",
      this.talentController.getSkillSet.bind(this.talentController)
    );

    router.put(
      "/:talentId/skill",
      this.checkJwt,
      this.talentController.updateSkill.bind(this.talentController)
    );

    router.delete(
      "/:talentId/skill/:skillId",
      this.checkJwt,
      this.talentController.deleteSkill.bind(this.talentController)
    );

    // <------------------------ EDUCATION ------------------------ >

    router.post(
      "/:talentId/education",
      this.checkJwt,
      this.talentController.addEducation.bind(this.talentController)
    );
    router.get(
      "/:talentId/education",
      this.talentController.getEducation.bind(this.talentController)
    );
    router.put(
      "/:talentId/education",
      this.checkJwt,
      this.talentController.updateEdu.bind(this.talentController)
    );

    router.delete(
      "/:talentId/education/:educationID",
      this.checkJwt,
      this.talentController.deleteEdu.bind(this.talentController)
    );

    // <------------------------ BENEFIT ------------------------ >

    router.get(
      "/:talentId/benefits",
      this.talentController.getBenefit.bind(this.talentController)
    );

    router.post(
      "/:talentId/benefits",
      this.checkJwt,
      this.talentController.addBenefit.bind(this.talentController)
    );

    // <------------------- JOB LISTINGS ------------------- >

    router.get(
      "/:talentId/joblistings",
      this.checkJwt,
      this.talentController.getEmAndJobListing.bind(this.talentController)
    );

    router.get(
      "/:talentId/alljoblistings",
      this.talentController.getAllApplications.bind(this.talentController)
    );

    // <------------------- APPLICATION ------------------- >

    router.post(
      "/:talentId/applications",
      this.checkJwt,
      this.talentController.addApplication.bind(this.talentController)
    );

    router.get(
      "/:talentId/applications",
      this.talentController.getApplications.bind(this.talentController)
    );

    router.put(
      "/:talentId/applications",
      this.talentController.putApplicationStatus.bind(this.talentController)
    );

    return router; // Return the router instance
  }
}

module.exports = TalentRouter;
