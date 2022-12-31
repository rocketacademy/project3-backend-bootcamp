const BaseController = require('./baseController');

class ChaptersController extends BaseController {
  constructor(model) {
    super(model);
  }
  async getAllChapters(req, res) {
    const { sectionId } = req.query;
    try {
      const { count, rows } = await this.model.findAndCountAll({
        where: { sectionId: sectionId },
      });
      console.log(count);
      return res.json(rows);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async getOne(req, res) {
    const { id } = req.params;
    try {
      const chapter = await this.model.findByPk(id);
      return res.json(chapter);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  /** if a method in this extended class AND the base class has the same name, the one in the extended class will run over the base method */
}

module.exports = ChaptersController;
