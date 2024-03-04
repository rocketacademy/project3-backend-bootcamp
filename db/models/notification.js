"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class notification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.user, { foreignKey: "user_id" });
      this.belongsTo(models.basket, { foreignKey: "basket_id" });
    }
  }
  notification.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "user",
          key: "id",
        },
      },
      basketId: {
        type: DataTypes.INTEGER,
        references: {
          model: "basket",
          key: "id",
        },
      },
      seen: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "notification",
      underscored: true,
    }
  );
  return notification;
};
