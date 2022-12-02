const BaseController = require('./baseController');

class CadetChaptersController extends BaseController {
  constructor(model, cadetModel, chapterModel) {
    super(model);
    this.cadetModel = cadetModel;
    this.chapterModel = chapterModel;
  }

  /** if a method in this extended class AND the base class has the same name, the one in the extended class will run over the base method */
  async getAll(req, res) {
    try {
      const output = await this.model.findAll();
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async getOne(req, res) {
    const { cadetId, chapterId } = req.query;
    try {
      const user = await this.model.findOne({
        where: { cadetId: cadetId, chapterId: chapterId },
      });
      return res.json(user);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async getAllChaptersProgress(req, res) {
    const { cadetId } = req.query;
    try {
      const { count, rows } = await this.model.findAndCountAll({
        where: { cadetId: cadetId, completed: true },
      });
      console.log(count);
      return res.json(rows);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = CadetChaptersController;
