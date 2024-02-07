const BaseController = require("./BaseController");

class TalentController extends BaseController {
  constructor(model) {
    super(model);
  }

  // Create talent
  async addTalent(req, res) {
    const { firstName, lastName, email, photo } = req.body;
    try {
      // Create new talent
      const newTalent = await this.model.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        photo: photo,
      });
      // Respond with new talent
      return res.json(newTalent);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // Edit and Update Talent
  async updateTalent(req, res) {
    const { firstName, lastName, email, photo } = req.body;
    const { talentId } = req.params;
    try {
      await this.model.update(
        {
          firstName: firstName,
          lastName: lastName,
          email: email,
          photo: photo,
        },
        {
          where: {
            id: talentId,
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

// get all user info under base controller
// delete is not required - user can't delete profile

module.exports = TalentController;
