"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Chat_image extends Model {
    static associate(models) {
      this.belongsTo(models.chatroom_message, {
        foreignKey: "chatroomMessagesId",
      });
    }
  }
  Chat_image.init(
    {
      url: DataTypes.STRING,

      chatroomMessagesId: {
        type: DataTypes.INTEGER,
        references: {
          model: "chatroom_messages",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "chat_image",
      underscored: true,
    }
  );
  return Chat_image;
};
