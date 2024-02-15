class ReviewsController {
  constructor(model) {
    this.model = model;
  }

  createOne = async (req, res) => {
    const { listingId, userId, rating, comment } = req.body;
    try {
      const result = await this.model.create({
        listingId,
        userId,
        comment,
        rating
      });
      res.status(200).json(result);
    } catch (error) {
      res.status(400).send(error);
    }
  };

  deleteOne = async (req, res) => {
    const { listingId, userId } = req.params;
    try {
      await this.model.destroy({
        where: {
          listingId,
          userId,
        },
      });
      res.status(200).send("removed like");
    } catch (error) {
      res.status(400).send(error);
    }
  };
}

module.exports = ReviewsController;
