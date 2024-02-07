// import category from "./models/category.js";
// import chat_image from "./models/chat_image.js";
// import chatroom_message from "./models/chatroom_message.js";
// import chatroom from "./models/chatroom.js";
// import index from "./models/index.js";
// import like from "./models/like.js";
// import listing_image from "./models/listing_image.js";
// import listing from "./models/listing.js";
// import order from "./models/order.js";
// import review from "./models/review.js";
// import user from "./models/user.js";

// const getListing = (req, res) => {
//   res.send("See listing");
// };

// const postListing = (req, res) => {
//   res.send("Post listing");
// };

// const deleteListing = (req, res) => {
//   res.send("Delete listing");
// };

// const searchListing = (req, res) => {
//   res.send("Search listing");
// };

// const getListingCategory = (req, res) => {
//   res.send("Listing category");
// };

// export default {
//   getListing,
//   postListing,
//   deleteListing,
//   searchListing,
//   getListingCategory,
// };

const BaseController = require("./baseController");

class homeController extends BaseController {
  constructor(model) {
    super(model);
  }
}

module.exports = homeController;
