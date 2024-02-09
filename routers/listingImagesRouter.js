const express = require('express')
const router = express.Router()

class ListingImagesRouter{
	constructor(controller){
		this.controller = controller
	}
	routes(){
        router.post('/', this.controller.createBatch.bind(this.controller))
		router.get('/:listingId', this.controller.getImagesForListing.bind(this.controller))
		return router
	}
}

module.exports = ListingImagesRouter
