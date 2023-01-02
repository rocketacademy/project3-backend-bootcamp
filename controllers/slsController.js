const BaseController = require('./baseController');

class SlsController extends BaseController {
  constructor(model) {
    super(model);
  }

  async getOne(req, res) {
    // const { id, sectionId } = req.query;
    try {
      const sl = await this.model.findOne({
        // where: [{ cadetId: id }, { sectionId: sectionId }],
        // include: { model: this.cadetSectionModel },
        where: {
          email: req.query.slEmail,
        },
      });
      return res.json(sl);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = SlsController;
