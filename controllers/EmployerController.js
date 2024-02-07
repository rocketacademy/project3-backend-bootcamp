const BaseController = require("./BaseController");

class EmployerController extends BaseController {
  constructor(model) {
    super(model);
  }

  // Create talent
  async insertOne(req, res) {
    const { firstName, lastName, email } = req.body;
    try {
      // Create new talent
      const newEmployer = await this.model.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
      });
      // Respond with new talent
      return res.json(newEmployert);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = EmployerController;
