const BaseController = require("./baseController");

class UsersController extends BaseController {
  constructor(model) {
    super(model);
    this.userModel = model;
  }

  async checkUserExist(req, res) {
    const { userEmail } = req.body;

    try {
      console.log(req.body);
      const user = await this.userModel.findOne({
        where: {
          email: userEmail,
        },
      });

      if (user) {
        return res.status(200).json({
          message: "User exists",
        });
      } else {
        return res.status(404).json({
          message: "User does not exist",
        });
      }
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        error: true,
        msg: err,
      });
    }
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
