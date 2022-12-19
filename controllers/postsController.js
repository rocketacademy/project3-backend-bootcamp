const BaseController = require("./baseController");

class PostsController extends BaseController {
  constructor(model) {
    super(model);
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
    const { id } = req.params;
    try {
      const user = await this.model.findOne({
        where: [{ id: id }],
      });
      return res.json(user);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async insertOne(req, res) {
    const { author, chapterId, content } = req.body;
    try {
      const newPost = await this.model.create({
        author: author,
        chapterId: chapterId,
        content: content,
        time: new Date(),
      });
      return res.json(newPost);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async updateOne(req, res) {
    const id = req.params.id;
    try {
      const updatePost = await this.model.update(req.body, {
        where: { id: id },
      });
      return res.json(updatePost);
    } catch (err) {
      return res.status(500).json({ error: true, msg: err });
    }
  }

  async deleteOne(req, res) {
    const id = req.params.id;
    try {
      const deletePost = await this.model.destroy({
        where: { id: id },
      });
      return res.json(deletePost);
    } catch (err) {
      return res.status(500).json({ error: true, msg: err });
    }
  }
}

module.exports = PostsController;
