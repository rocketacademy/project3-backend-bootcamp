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
	async getById(req, res) {
    const { categoryId } = req.params;
    try {
			const category = await this.model.findByPk(categoryId);
      return res.status(200).send(category.name)
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
	async getByName(req, res) {
    const { categoryName } = req.params;
    try {
			const category = await this.model.findOne({
        where:{
          name:categoryName
        },
        attributes: ["id"]
      });
      return res.status(200).send(category)
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = CategoriesController;
