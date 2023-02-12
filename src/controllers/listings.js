const {
  Sequelize,
  listings
} = require('../db/models')

module.exports = {
  async getAllListings(req, res){
    const gottenListings = await listings.findAll();
    return res.json(gottenListings)
  }
}