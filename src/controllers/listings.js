const { listings } = require("../db/models");

module.exports = {
  // tested and working
  async getAllListings(req, res) {
    const retrieveListings = await listings.findAll();
    return res.json(retrieveListings);
  },
  async createListing(req, res) {
    const { body: payload } = req;
    const currentDate = new Date();

    const newListing = await listings.create({
      ...payload,
      created_at: currentDate,
      updated_at: currentDate,
    });

    return res.json(newListing);
  },

  //not yet tested, just putting here first
  async getWelcomePageListings(req, res) {
    const homepageListings = await listings.findAll({ limit: 4 });
    return res.json(homepageListings);
  },
  async deleteListing(req, res) {
    const deleteResult = await listings.destroy({
      where: {
        id: req.params.listing_id,
      },
    });
    return res.json(deleteResult);
  },
  async getOneListing(req, res) {
    const retrieveOneListing = await listings.findOne({
      where: {
        id: req.params.listing_id,
      },
    });
    return res.json(retrieveOneListing);
  },
  async getUserListings(req, res) {
    const userListings = await listings.findAll({
      where: {
        id: req.params.user_id,
      },
    });
    return res.json(userListings);
  },
  //this edit listing may have some issue with what the model returns
  async editListing(req, res) {
    const { body: payload } = req;
    const currentDate = new Date();
    const editedData = await listings.update(
      {
        ...payload,
        updated_at: currentDate,
      },
      {
        where: {
          id: req.params.listing_id,
        },
      }
    );
    return res.json(editedData);
  },
};
