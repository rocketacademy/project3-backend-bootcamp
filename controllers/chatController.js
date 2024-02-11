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

// const getAllChat = (req, res) => {
//   res.send("All chat");
// };

// const getSpecificChat = (req, res) => {
//   res.send("Specific chat");
// };

// const postMessage = (req, res) => {
//   res.send("Send message");
// };

// const deleteMessage = (req, res) => {
//   res.send("Delete message");
// };

// export default {
//   getAllChat,
//   getSpecificChat,
//   postMessage,
//   deleteMessage,
// };

const { Sequelize } = require("../models");
const BaseController = require("./baseController");

class ChatController extends BaseController {
  constructor(model, chatroom_message) {
    super(model);
    this.chatroom_message = chatroom_message;
  }

  //GET ALL CHATS WHERE USER IS EITHER OWNER OF LISTING OR POTENTIAL BUYER
  async getAll(req, res) {
    const { userId } = req.body;
    try {
      const output = await this.model.findAll({
        where: { potential_buyer_id: userId },
      });
      console.log("HELLO WORLD");
      return res.send("HELLO WORLD");
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async createMessage(req, res) {
    const { chatroomId, comment, sender } = req.body;
    console.log(`chat ${chatroomId}`);
    try {
      const newMessage = await this.chatroom_message.create({
        chatroomId: chatroomId,
        comment: comment,
        sender: sender,
      });

      return res.send(newMessage);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = ChatController;
