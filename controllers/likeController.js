const BaseController = require("./baseController");

class LikeController extends BaseController {
  constructor(model) {
    super(model);
  }

  // LIKE
  async likeListing(userId, listingId) {
    try {
      const like = await this.model.findOne({ userId, listingId });
      // check if user already liked the listing
      if (like) {
        return this.sendResponse(400, "Already liked");
      }
      // if not, create new like
      const newLike = new this.model({ userId, listingId });
      await newLike.save();

      return this.sendResponse(201, "Like");
    } catch (error) {
      return this.sendResponse(500, "Error liking");
    }
  }

  // UNLIKE
  async unLikeListing(userId, listingId) {
    try {
      await this.model.deleteOne({ userId, listingId });
      return this.sendResponse(200, "Unlike");
    } catch (error) {
      return this.sendResponse(500, "Error unliking");
    }
  }
}

module.exports = LikeController;
