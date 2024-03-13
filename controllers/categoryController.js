"use strict";
const db = require("../db/models/index");

const BaseController = require("./baseController");

class CategoryController extends BaseController {
  constructor(
    model,
    sellerModel,
    sellerLikeModel,
    sellerReviewModel,
    basketModel
  ) {
    super(model);
    this.sellerModel = sellerModel;
    this.sellerLikeModel = sellerLikeModel;
    this.sellerReviewModel = sellerReviewModel;
    this.basketModel = basketModel;
  }

  async getSellersByCategory(req, res) {
    try {
      const { sequelize, Sequelize } = db;
      const categoryId = req.params.categoryId;
      const userLatitude = 22.317330117054336;
      const userLongitude = 114.18860305272894;

      const sellerswithBaskets = await this.sellerModel.findAll({
        where: { categoryId: categoryId },
        include: [{ model: this.basketModel }],
      });
      // Filter sellers by distance using a raw query
      const sellersFilteredByDistance = await sequelize.query(
        `
      SELECT "sellers".*, 
      "baskets"."title" AS "title",
      "baskets"."original_price" AS "originalPrice",
      "baskets"."discounted_price" AS "discountedPrice",
      "baskets"."photo" AS "photo",
      "baskets"."stock" AS "stock",
      ST_DistanceSphere(
        location,
        ST_SetSRID(ST_MakePoint(:longitude, :latitude), 4326)::geometry
      ) AS distance
      FROM "sellers" 
      INNER JOIN "baskets" ON "sellers"."id" = "baskets"."seller_id"
      WHERE "sellers"."category_id" = :categoryId
      
      `,
        {
          replacements: {
            categoryId,
            latitude: userLatitude,
            longitude: userLongitude,
          },
          type: Sequelize.QueryTypes.SELECT,
          model: this.sellerModel,
          mapToModel: true,
        }
      );
      return res.json(sellersFilteredByDistance);
    } catch (error) {
      return res.status(400).json({ error: true, message: error.message });
    }
  }

  async getBasket(req, res) {
    try {
      const basketId = req.params.basketId;
      const basket = await this.basketModel.findAll({
        where: { id: basketId },
      });

      return res.json(basket);
    } catch (error) {
      return res.status(400).json({ error: true, message: error.message });
    }
  }
}

module.exports = CategoryController;
