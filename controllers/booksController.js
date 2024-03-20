const BaseController = require("./baseController");

class BooksController extends BaseController {
  constructor(model) {
    super(model);
  }

  async insertBook(req, res) {
    const { title, author, description, released_year, condition, review } =
      req.body;

    try {
      const newBook = await this.model.create({
        title: title,
        author: author,
        description: description,
        released_year: released_year,
        condition: condition,
        review: review,
      });
      return res.json(newBook);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}
module.exports = BooksController;
