"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class module_progress extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.cadet);
    }
  }
  module_progress.init(
    {
      cadetId: {
        type: DataTypes.INTEGER,
        references: {
          model: "cadet",
          key: "id",
        },
      },
      moduleId: DataTypes.INTEGER,
      completed: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "module_progress",
    }
  );
  return module_progress;
};
