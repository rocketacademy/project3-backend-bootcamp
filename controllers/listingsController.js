const BaseController = require('./baseController')

class ListingsController extends BaseController{
	constructor(model){
		super(model)
	}
	async createOne(req,res){
	}
}

module.exports = ListingsController
