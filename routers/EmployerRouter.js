const express = require("express");
const router = express.Router();

class EmployerRouter {
  constructor(employerController) {
    this.controller = employerController;
  }

  routes() {
    router.get("/", this.controller.getAll.bind(this.controller));
    router.post("/", this.controller.addEmployer.bind(this.controller));
    router.post(
      "/:employerId",
      this.controller.updateEmployer.bind(this.controller)
    );

    // <------------------------ JOB LISTING ------------------------ >

    router.post(
      "/:employerId/job",
      this.controller.addJobListing.bind(this.controller)
    );
    //for getting all job listings related to the employer
    router.get(
      "/:employerId/job",
      this.controller.getJobListing.bind(this.controller)
    );
    //for getting the specific one joblisting with the id and the employer
    router.get(
      "/:employerId/job/:jobListingId",
      this.controller.getOneJobListingApps.bind(this.controller)
    );

    return router; // Return the router instance
  }
}

module.exports = EmployerRouter;
