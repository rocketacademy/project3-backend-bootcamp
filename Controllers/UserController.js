class UserController {
  constructor(model) {
    this.model = model;
  }

  getAllStudents = async (req, res) => {
    try {
      const condition = { where: { status: false } };
      const allStudents = await this.model.findAll(condition);

      res.json(allStudents);
    } catch (e) {
      console.log(e);
    }
  };
}

module.exports = UserController;
