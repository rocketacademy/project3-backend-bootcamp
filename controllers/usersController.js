const BaseController = require("./baseController");

class UsersController extends BaseController {
  constructor(model) {
    super(model);
    this.userModel = model;
  }

  async insertUser(req, res) {
    const { userEmail, firstName, lastName } = req.body;

    try {
      const user = await this.userModel.create({
        firstName: firstName,
        lastName: lastName,
        email: userEmail,
      });

      return res.status(200).json({
        message: "User created",
      });
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        error: true,
        msg: err,
      });
    }
  }
}
module.exports = UsersController;
