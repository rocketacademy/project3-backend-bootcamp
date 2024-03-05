const BaseController = require("./baseController");

class CategoryController extends BaseController {
  constructor(categoryModel, sellerModel, sellerLikeModel, sellerReviewModel) {
    super(categoryModel);
    this.sellerModel = sellerModel;
    this.sellerLikeModel = sellerLikeModel;
    this.sellerReviewModel = sellerReviewModel;
  }

  async getSellersByCategory(req, res) {
    try {
      const categoryId = req.params.categoryId;
      const sellers = await this.sellerModel.findAll({
        where: { category_id: categoryId },
      });
      return res.json(sellers);
    } catch (error) {
      return res.status(400).json({ error: true, message: error.message });
    }
  }
}

module.exports = CategoryController;
