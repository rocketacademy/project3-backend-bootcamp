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

// const getCurrentUser = (req, res) => {
//   res.send("Get current user");
// };

// const postCurrentUser = (req, res) => {
//   res.send("Post current user");
// };

// export default {
//   getCurrentUser,
//   postCurrentUser,
// };

const BaseController = require("./baseController");

class authController extends BaseController {
  constructor(model) {
    super(model);
  }
}

module.exports = authController;
