"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class chat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.user, { foreignKey: "user_id" });
      this.belongsTo(models.seller, { foreignKey: "seller_id" });
      this.hasMany(models.message, { foreignKey: "chat_id" });
    }
  }
  chat.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "user",
          key: "id",
        },
      },
      sellerId: {
        type: DataTypes.INTEGER,
        references: {
          model: "seller",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "chat",
      underscored: true,
    }
  );
  return chat;
};
