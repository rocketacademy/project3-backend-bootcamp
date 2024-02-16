const BaseController = require("./BaseController");

class EmployerController extends BaseController {
  constructor(model, jobListingModel, benefitModel) {
    super(model);
    this.jobListingModel = jobListingModel;
    this.benefitModel = benefitModel;
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
