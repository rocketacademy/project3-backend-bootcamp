const { Sequelize } = require("../models");
const BaseController = require("./baseController");

class ChatController extends BaseController {
  constructor(model, chatImageModel, chatroomModel) {
    super(model);
    this.chatImageModel = chatImageModel;
    this.chatroomModel = chatroomModel;
  }

  //Retrieve past messages for specific chatroom Id
  async getMessages(req, res) {
    const { chatroomId } = req.params;
    console.log(`chat ${chatroomId}`);
    try {
      const chatroomMessages = await this.model.findAll({
        where: {
          chatroomId: chatroomId,
        },
      });

      return res.send(chatroomMessages);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  //Posts message content
  async createMessage(req, res) {
    const { chatroomId, comment, sender } = req.body;
    console.log(`chat ${chatroomId}`);
    try {
      const newMessage = await this.model.create({
        chatroomId: chatroomId,
        comment: comment,
        sender: sender,
      });

      return res.send(newMessage);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  //Posts chat images sent with messages
  async createImage(req, res) {
    const { url, chatroomMessagesId } = req.body;
    console.log(url, chatroomMessagesId);
    try {
      const newImage = await this.chatImageModel.create({
        url: url,
        chatroomMessagesId: chatroomMessagesId,
      });

      return res.send(newImage);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  //Creates new chat or finds chat if available
  async createChatroom(req, res) {
    const { listingId, potentialBuyerId } = req.body;
    console.log(listingId, potentialBuyerId);
    try {
      const [chatroom, created] = await this.chatroomModel.findOrCreate({
        where: {
          listingId: listingId,
          potentialBuyerId: potentialBuyerId,
        },
      });
      return res.send(chatroom);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = ChatController;

//GET ALL CHATS WHERE USER IS EITHER OWNER OF LISTING OR POTENTIAL BUYER
// async getAll(req, res) {
//   const { userId } = req.body;
//   try {
//     const output = await this.model.findAll({
//       where: { potential_buyer_id: userId },
//     });
//     console.log("HELLO WORLD");
//     return res.send("HELLO WORLD");
//   } catch (err) {
//     return res.status(400).json({ error: true, msg: err });
//   }
// }
