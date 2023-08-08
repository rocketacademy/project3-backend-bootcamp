"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class chat_history extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.chat, { foreignKey: "chatId" });
    }
  }
  chat_history.init(
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
  return chat_history;
};
