const BaseController = require("./baseController");

class ReviewController extends BaseController {
  constructor(model) {
    super(model);
  }

  // CREATE REVIEW
  async createReview(userId, listingId) {
    try {
      const newReview = new this.model({ userId, listingId });
      await newReview.save();

      return { success: true, message: "Review created" };
    } catch (error) {
      console.error("Error creating review:", error);
      return {
        success: false,
        message: "An error occurred while creating the review.",
      };
    }
  }

  // RENDER REVIEW
  async getReview(itemId, listingId) {
    try {
      const reviews = await this.model.find({ itemId, listingId });
      return { success: true, reviews };
    } catch (error) {
      console.error("Error fetching reviews:", error);
      return {
        success: false,
        message: "An error occurred while fetching the reviews.",
      };
    }
  }

  // DELETE REVIEW
  async deleteReview(itemId, listingId) {
    try {
      const deletedReview = await this.model.findByIdAndDelete(
        itemId,
        listingId
      );
      if (deletedReview) {
        return { success: true, message: "Review deleted" };
      } else {
        return { success: false, message: "Review not found" };
      }
    } catch (error) {
      console.error("Error deleting review:", error);
      return {
        success: false,
        message: "An error occurred while deleting the review.",
      };
    }
  }
}

module.exports = ReviewController;
