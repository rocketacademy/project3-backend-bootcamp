const BaseController = require("./baseController");

class ListingsController extends BaseController {
	constructor(model, categoryModel, listingImageModel, userModel) {
		super(model);
		this.categoryModel = categoryModel;
		this.listingImageModel = listingImageModel;
		this.userModel = userModel
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
			const selectedCategory = await this.categoryModel.findByPk(categoryId)
			await createListing.setCategory(selectedCategory)
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
				where:{
					listingId
				}
			})
			const imageUrls = images.map(image=>image.url)
			const category = await this.categoryModel.findOne({
				where:{
					id:output.categoryId
				}
			})
			const seller = await this.userModel.findByPk(output.sellerId)
			return res.status(200).json({listing: output,images:imageUrls, category:category.name, seller:seller });
		} catch (err) {
			return res.status(400).send("Failed, check ur code dummy");
		}
	}
}

module.exports = ListingsController;
