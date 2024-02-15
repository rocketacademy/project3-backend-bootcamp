class LikesController {
  constructor(model) {
    this.model = model;
  }

  /* All controllers that extend this BASE controller will have access to the below function **/

  createOne = async (req, res) => {
    const { listingId, userId } = req.body;
    try {
      const result = await this.model.create({
        listingId,
        userId,
      });
      res.status(200).json(result);
    } catch (error) {
      res.status(400).send(error);
    }
  };

  getCount = async (req, res) => {
    const { listingId } = req.params;
    try {
      const count = await this.model.count({
        where: {
          listingId,
        },
      });
      res.status(200).send(count);
    } catch (error) {
      res.status(400).send(error);
    }
  };

  getLikesList = async (req, res) => {
    const { userId } = req.params;
    try {
      const list = await this.model.findAll({
        where: {
          userId,
        },
      });
      res.status(200).json(list);
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

module.exports = LikesController;
