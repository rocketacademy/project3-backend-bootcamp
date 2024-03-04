"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.user, { foreignKey: "sender_user_id" });
      this.belongsTo(models.seller, { foreignKey: "sender_seller_id" });
      this.belongsTo(models.chat, { foreignKey: "chat_id" });
    }
  }
  message.init(
    {
      chatId: {
        type: DataTypes.INTEGER,
        references: {
          model: "chat",
          key: "id",
        },
      },
      senderUserId: {
        type: DataTypes.INTEGER,
        references: {
          model: "user",
          key: "id",
        },
      },
      senderSellerId: {
        type: DataTypes.INTEGER,
        references: {
          model: "seller",
          key: "id",
        },
      },
      content: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "message",
      underscored: true,
    }
  );
  return message;
};
