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
      // define association here
      this.belongsTo(models.product, { foreignKey: "productId" });
      this.belongsTo(models.user, { as: "fromUserId", foreignKey: "userId" });
      this.hasMany(models.chat_history);
    }
  }
  chat.init(
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
  return chat;
};
