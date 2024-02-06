const BaseController = require("./BaseController");

class TalentController extends BaseController {
  constructor(model) {
    super(model);
  }

  // Create talent
  async insertOne(req, res) {
    const { firstName, lastName, email } = req.body;
    try {
      // Create new talent
      const newTalent = await this.model.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
      });
      // Respond with new sighting
      return res.json(newTalent);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = TalentController;
