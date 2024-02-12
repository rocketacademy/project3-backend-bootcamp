// const BaseController = require("./baseController");

class ListingsController {
  constructor(model, categoryModel, listingImageModel, userModel) {
    this.model = model;
    this.categoryModel = categoryModel;
    this.listingImageModel = listingImageModel;
    this.userModel = userModel;
  }

  getAll = async (req, res) => {
    try {
      const allListings = await this.model.findAll({
        include: [
          { model: this.listingImageModel, attributes: ["url"], limit: 1 },
          { model: this.categoryModel, attributes: ["id", "name"] },
          {
            model: this.userModel,
            as: "seller",
            attributes: ["username", "firstName", "lastName", "profilePicture"],
          },
        ],
      });
      return res.status(200).json(allListings);
    } catch (error) {
      return res.status(400).send(error);
    }
  };

  async createOne(req, res) {
    const { title, description, price, sellerId, categoryId } = req.body;
    try {
      const createListing = await this.model.create({
        title,
        description,
        price,
        sellerId,
        categoryId,
        sold: false,
        reserved: false,
      });
      const selectedCategory = await this.categoryModel.findByPk(categoryId);
      await createListing.setCategory(selectedCategory);
      return res.status(200).json(createListing);
    } catch (err) {
      return res.status(400).send(err);
    }
  }
  async getOne(req, res) {
    const { listingId } = req.params;
    try {
      const listing = await this.model.findByPk(listingId, {
        include: [
          { model: this.listingImageModel, attributes: ["url"] },
          { model: this.categoryModel, attributes: ["id", "name"] },
          {
            model: this.userModel,
            as: "seller",
            attributes: ["username", "firstName", "lastName", "profilePicture"],
          },
        ],
      });
      return res.status(200).json(listing);
    } catch (err) {
      return res.status(400).send("Failed, check ur code dummy");
    }
  }

  //Should this be nested within userController, under getProfileByUsername?
  async getListingsOfUser(req, res) {
    const { userId } = req.params;
    try {
      const userListings = await this.model.findAll({
        where: {
          sellerId: userId,
        },
        include: [this.listingImageModel],
      });
      return res.status(200).send(userListings);
    } catch (err) {
      return res.status(500).send("yea... check your code.");
    }
  }

  // ASK SAM ABOUT TURNING THIS INTO A MIDDLEWARE FUNCTION, IT CAN BE USED IN MESSAGES, SEARCH, ETC.
  getPaginated = async (req, res) => {
    const page = Number(req.query.page);
    const limit = 6;
    const offset = (page - 1) * limit;

    try {
      const results = {};

      results.listings = await this.model.findAll({
        order: [["updatedAt", "DESC"]],
        offset: offset,
        limit: limit,
        include: [
          { model: this.listingImageModel, attributes: ["url"], limit: 1 },
          { model: this.categoryModel, attributes: ["id", "name"] },
          {
            model: this.userModel,
            as: "seller",
            attributes: ["username", "firstName", "lastName", "profilePicture"],
          },
        ],
      });
      const countListings = await this.model.count();

      results.previous = {
        exists: offset > 0 ? true : false,
        page: offset > 0 ? page - 1 : null,
        limit,
      };

      results.next = {
        exists: offset + limit <= countListings ? true : false,
        page: offset + limit <= countListings ? page + 1 : null,
        limit,
      };

      res.status(200).json(results);
    } catch (error) {
      res.status(400).send("check your code");
    }
  };
}

module.exports = ListingsController;
