const BaseController = require("./baseController");

class CategoriesController extends BaseController {
  constructor(model) {
    super(model);
  }

  async createOne(req, res) {
    const { name } = req.body;
    try {
      const createCategory = await this.model.create({
        name,
      });
      return res.status(200).json(createCategory)
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = CategoriesController;
