"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class order_history extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.order, { foreignKey: "orderId" });
      this.belongsTo(models.event, { foreignKey: "eventType" });
    }
  }
  order_history.init(
    {
      orderId: {
        type: DataTypes.INTEGER,
        references: {
          model: "order",
          key: "id",
        },
      },
      eventType: {
        type: DataTypes.INTEGER,
        references: {
          model: "event",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "order_history",
      underscored: true,
    }
  );
  return order_history;
};
