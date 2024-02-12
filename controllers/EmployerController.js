const BaseController = require("./BaseController");

class EmployerController extends BaseController {
  constructor(model, jobListingModel) {
    super(model);
    this.jobListingModel = jobListingModel;
  }

  // Create employer
  async addEmployer(req, res) {
    const { firstName, lastName, companyName, email, photo, description } =
      req.body;
    try {
      // Create new employer
      const newEmployer = await this.model.create({
        firstName: firstName,
        lastName: lastName,
        companyName: companyName,
        email: email,
        photo: photo,
        description: description,
      });
      // Respond with new employer
      return res.json(newEmployer);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // Edit and Update Employer
  async updateEmployer(req, res) {
    const { firstName, lastName, companyName, email, photo, description } =
      req.body;
    const { employerId } = req.params;
    try {
      await this.model.update(
        {
          firstName: firstName,
          lastName: lastName,
          companyName: companyName,
          email: email,
          photo: photo,
          description: description,
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
      return res.status(400).json({ error: true, msg: err });
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
      return res.json(newJobListing);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async getJobListing(req, res) {
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
}

// get all user info under base controller
// delete is not required - user can't delete profile

module.exports = EmployerController;
