"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Chatroom_message extends Model {
    static associate(models) {
      this.belongsTo(models.chatroom, { foreignKey: "chatroomId" });
      this.hasMany(models.chatroom_image, { foreignKey: "chatroomMessagesId" });
    }
  }
  Chatroom_message.init(
    {
      comment: DataTypes.STRING,

      chatroomId: {
        type: DataTypes.INTEGER,
        references: {
          model: "chatrooms",
          key: "id",
        },
      },

      sender: {
        type: DataTypes.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "chatroom_message",
      underscored: true,
    }
  );
  return Chatroom_message;
};
