const BaseController = require("./baseController");

class ListingsController extends BaseController {
  constructor(model, categoryModel, listingImageModel, userModel) {
    super(model);
    this.categoryModel = categoryModel;
    this.listingImageModel = listingImageModel;
    this.userModel = userModel;
  }
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
      const output = await this.model.findByPk(listingId);
      const images = await this.listingImageModel.findAll({
        where: {
          listingId,
        },
      });
      const imageUrls = images.map((image) => image.url);
      const category = await this.categoryModel.findOne({
        where: {
          id: output.categoryId,
        },
      });
      const seller = await this.userModel.findByPk(output.sellerId);
      return res.status(200).json({
        listing: output,
        images: imageUrls,
        category: category.name,
        seller: seller,
      });
    } catch (err) {
      return res.status(400).send("Failed, check ur code dummy");
    }
  }

  async getListingsOfUser(req, res) {
    const { userId } = req.params;
    try {
      const userListings = await this.model.findAll({
        where: {
          sellerId: userId,
        },
      });
      const userListingsIdArr = userListings.map(
        (userListing) => userListing.id
      );
      return res.status(200).send(userListingsIdArr);
    } catch (err) {
      return res.status(500).send("yea... check your code.");
    }
  }

  // ASK SAM ABOUT TURNING THIS INTO A MIDDLEWARE FUNCTION COS WTF?! THEY DIDNT TEACH US HOW TO USE MIDDLEWARE IN THIS 
  getPaginated = async(req, res) => {
       const page = Number(req.query.page);
       const limit = 1;
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

         res.status(200).json(results)
       } catch (error) {
         res.status(400).send("check your code");
       }

  }
}

module.exports = ListingsController;
