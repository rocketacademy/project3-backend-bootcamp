const BaseController = require("./baseController");

class CadetsController extends BaseController {
  constructor(model, cadetSectionsModel, cadetChaptersModel, sectionsModel) {
    super(model);
    this.cadetSectionsModel = cadetSectionsModel;
    this.cadetChaptersModel = cadetChaptersModel;
    this.sectionsModel = sectionsModel;
  }

  /** if a method in this extended class AND the base class has the same name, the one in the extended class will run over the base method */
  async getOne(req, res) {
    const { email } = req.params;
    try {
      const user = await this.model.findOne({
        where: { email: email },
      });
      return res.json(user);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = CadetsController;
