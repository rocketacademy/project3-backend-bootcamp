const BaseController = require("./BaseController");

class EmployerController extends BaseController {
  constructor(model, jobListingModel, benefitModel, applicationModel) {
    super(model);
    this.jobListingModel = jobListingModel;
    this.benefitModel = benefitModel;
    this.applicationModel = applicationModel;
  }

  // Create employer
  async addEmployer(req, res) {
    const {
      firstName,
      lastName,
      companyName,
      email,
      photo,
      description,
      missionStatement,
      headquarters,
      phone,
    } = req.body;
    try {
      // Create new employer
      const newEmployer = await this.model.create({
        firstName: firstName,
        lastName: lastName,
        companyName: companyName,
        email: email,
        photo: photo,
        description: description,
        missionStatement: missionStatement,
        headquarters: headquarters,
        phone: phone,
      });
      // Respond with new employer
      return res.json(newEmployer);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // Edit and Update Employer
  async updateEmployer(req, res) {
    const {
      firstName,
      lastName,
      companyName,
      email,
      photo,
      description,
      missionStatement,
      headquarters,
      phone,
    } = req.body;
    const { employerId } = req.params;
    //if employerID /= in the list of employers, should throw error and not be able to update

    try {
      let employer_data = await this.model.findOne({
        where: { id: employerId },
      });
      if (employer_data == null) {
        throw new Error(
          "Employer you are trying to edit does not exist in the database."
        );
      }
      await this.model.update(
        {
          firstName: firstName,
          lastName: lastName,
          companyName: companyName,
          email: email,
          photo: photo,
          description: description,
          missionStatement: missionStatement,
          headquarters: headquarters,
          phone: phone,
        },
        {
          where: {
            id: employerId,
          },
        }
      );
      const output = await this.model.findAll();
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err.message });
    }
  }

  // <------------------------ JOB LISTING ------------------------ >

  async addJobListing(req, res) {
    const { employerId } = req.params;
    const {
      jobTitle,
      description,
      jobResponsibility,
      skillSet,
      applicationStartDate,
      applicationEndDate,
    } = req.body;

    console.log(req.body);
    try {
      //tag to employerID
      const newJobListing = await this.jobListingModel.create({
        jobTitle: jobTitle,
        description: description,
        jobResponsibility: jobResponsibility,
        skillSet: skillSet,
        applicationStartDate: applicationStartDate,
        applicationEndDate: applicationEndDate,
        employerId: employerId,
      });
      // Respond with the new work experience
      {
        const { employerId } = req.params;
        const { benefit1, benefit2, benefit3 } = req.body;

        try {
          // Check if the talent exists
          console.log("req.body", req.body);
          const employer = await this.model.findByPk(employerId);
          if (!employer) {
            return res
              .status(404)
              .json({ error: true, msg: "Employer not found" });
          }
          // Create a new benefit and associate it with the talent
          const addJobListingBenefit = await this.benefitModel.findAll({
            where: {
              id: [benefit1, benefit2, benefit3],
            },
          });
          await newJobListing.setBenefits(addJobListingBenefit);
          // Respond with the newly created benefit
          return res.json(addJobListingBenefit);
        } catch (err) {
          return res.status(400).json({ error: true, msg: err });
        }
      }
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async getJobListing(req, res) {
    console.log("getJobListing is being called");
    const { employerId } = req.params;
    try {
      //tag to talent ID
      const jobListing = await this.jobListingModel.findAll({
        where: {
          employerId: employerId,
        },
      });
      // Respond with the new work experience
      return res.json(jobListing);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async getOneJobListingApps(req, res) {
    console.log("req.params in getOneJobListing:", req.params);
    const { employerId, jobListingId } = req.params;

    try {
      //tag to talent ID
      const jobListing = await this.jobListingModel.findByPk(jobListingId);

      const appsForJobListing = await jobListing.getApplications();
      console.log("i am apps for job listing", appsForJobListing);

      console.log("jobListing", jobListing);
      console.log("applications for job listing", appsForJobListing);
      const response = {
        applications: appsForJobListing,
        jobListing: jobListing,
      };

      return res.json(response);
    } catch (err) {
      console.log("err", err);
      return res.status(400).json({ error: true, msg: err });
    }
  }
  //return res.json(jobListing);
  //get all applications relating to the job listing.
  //-> get the id of all applications that have a specific job listing id
  //use stuff from the documentation
}

//Employer Dashboard should get all job listings posted by the employer.
//Clicking on a job listing should bring the employer to a page where they can reject or accept applications associated with the job listing.

// get all user info under base controller
// delete is not required - user can't delete profile

module.exports = EmployerController;
