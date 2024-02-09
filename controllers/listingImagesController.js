const BaseController = require('./baseController')

class ListingImagesController extends BaseController{
	constructor(model){
		super(model)
	}
	async createBatch(req,res){
        const { listingImages } = req.body 
        try{
            const uploadListingImages = await this.model.bulkCreate(
                listingImages.map(listingImage=>({listingId:listingImage.listingId, url:listingImage.url}))
            );
            return res.status(200).send("images uploaded to backend")
        }catch(err){
            return res.status(400).json({"success":false, "msg": err})
        }
	}
    async getImagesForListing(req, res) {
        const { listingId } = req.params
        try {
          const output = await this.model.findAll({
            where:{
                listingId
            }
          });
          return res.json(output);
        } catch (err) {
          return res.status(400).json({ error: true, msg: err });
        }
      }
}

module.exports = ListingImagesController