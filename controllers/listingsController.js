const BaseController = require("./baseController");

class ListingsController extends BaseController {
	constructor(model) {
		super(model);
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
			return res.status(200).json(createListing);
		} catch (err) {
			return res.status(400).send(err);
		}
	}
	async getOne(req, res) {
		const { listingId } = req.params;
		try {
			const output = await this.model.findOne({
				where: {
					listingId,
				},
			});
			return res.status(200).json(output);
		} catch (err) {
			return res.status(400).send("Failed, check ur code dummy");
		}
	}
}

module.exports = ListingsController;
