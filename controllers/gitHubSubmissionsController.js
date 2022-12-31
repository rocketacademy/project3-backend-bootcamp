const BaseController = require("./baseController");

class GitHubSubmissionsController extends BaseController {
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

  async insertOne(req, res) {
    const { cadetId, chapterId } = req.body;
    try {
      const checkData = await this.model.findOrCreate({
        where: {
          cadetId: cadetId,
          chapterId: chapterId,
        },
        defaults: {
          repoUrl: "",
        },
      });
      return res.json(checkData);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async updateOne(req, res) {
    const { cadetId, chapterId, repoUrl } = req.body;
    try {
      const checkData = await this.model.findOne({
        where: {
          cadetId: cadetId,
          chapterId: chapterId,
        },
      });
      const response = await checkData.update({
        repoUrl: repoUrl,
      });
      return res.json(response);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = GitHubSubmissionsController;
