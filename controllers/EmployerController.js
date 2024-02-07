const BaseController = require("./BaseController");

class EmployerController extends BaseController {
  constructor(model) {
    super(model);
  }

  // Create talent
  async addEmployer(req, res) {
    const { firstName, lastName, companyName, email, photo, description } =
      req.body;
    try {
      // Create new talent
      const newEmployer = await this.model.create({
        firstName: firstName,
        lastName: lastName,
        companyName: companyName,
        email: email,
        photo: photo,
        description: description,
      });
      // Respond with new talent
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
}

// Update employer content
// get all user info under base controller
// delete is not required - user can't delete profile

module.exports = EmployerController;
