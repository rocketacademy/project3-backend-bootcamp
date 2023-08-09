"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Chat_History extends Model {
    static associate(models) {
      this.belongsTo(models.chat, { foreignKey: "chatId" });
    }
  }
  Chat_History.init(
    {
      chatId: {
        type: DataTypes.INTEGER,
        references: {
          model: "chat",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "chat_history",
      underscored: true,
    }
  );
  return Chat_History;
};
