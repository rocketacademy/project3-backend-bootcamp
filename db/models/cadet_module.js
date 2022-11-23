"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class cadet_module extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.cadet);
      this.belongsTo(models.module);
    }
  }
  cadet_module.init(
    {
      cadetId: {
        type: DataTypes.INTEGER,
        references: {
          model: "cadet",
          key: "id",
        },
      },
      moduleId: {
        type: DataTypes.INTEGER,
        references: {
          model: "module",
          key: "id",
        },
      },
      completed: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "cadet_module",
    }
  );
  return cadet_module;
};
