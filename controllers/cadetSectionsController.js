const BaseController = require('./baseController');

class CadetSectionsController extends BaseController {
  constructor(model, cadetModel, sectionModel) {
    super(model);
    this.cadetModel = cadetModel;
    this.sectionModel = sectionModel;
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
    const { cadetId, sectionId } = req.query;
    try {
      const user = await this.model.findOne({
        where: { cadetId: cadetId, sectionId: sectionId },
      });
      return res.json(user);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  //get all completed section progress
  async getAllCompletedSectionsProgress(req, res) {
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

  //get ALL section progress irregardless completed or not
  async getAllSectionsProgress(req, res) {
    const { cadetId } = req.query;
    try {
      const { count, rows } = await this.model.findAndCountAll({
        where: { cadetId: cadetId },
      });
      console.log(count);
      return res.json(rows);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = CadetSectionsController;
