const { Sequelize } = require("../models");
const BaseController = require("./baseController");

class ChatController extends BaseController {
  constructor(model, chatroomMessageModel, chatImageModel) {
    super(model);
    this.chatroomMessageModel = chatroomMessageModel;
    this.chatImageModel = chatImageModel;
  }

  //Posts message content
  async createMessage(req, res) {
    const { chatroomId, comment, sender } = req.body;
    console.log(`chat ${chatroomId}`);
    try {
      const newMessage = await this.chatroomMessageModel.create({
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
