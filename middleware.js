// ASK SAM HOW TO IMPLEMENT

export const pagination = () => {
  return async (req, res, next) => {
    const page = Number(req.query.page);
    const limit = Number(req.query.limit);
    const offset = (page - 1) * limit;

    try {
      const results = {};

      results.listings = await this.model.findAll({
        offset: offset,
        limit: limit,
      });
      const countListings = await this.model.count();

      if (offset > 0) {
        results.previous = {
          page: page - 1,
          limit,
        };
      }

      if (offset + limit !== countListings) {
        results.next = {
          page: page + 1,
          limit,
        };
      }

      res.paginatedResults = results
      next()
    } catch (error) {
      res.status(400).send("check your code");
    }
  };
};
