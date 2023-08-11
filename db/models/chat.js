"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Chat extends Model {
    static associate(models) {
      this.belongsTo(models.product, { foreignKey: "productId" });
      this.belongsTo(models.user, { foreignKey: "userId" });
      this.hasMany(models.chat_history);
    }
  }
  Chat.init(
    {
      productId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      content: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "chat",
      underscored: true,
    }
  );
  return Chat;
};