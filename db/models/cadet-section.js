"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CadetSection extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.cadet);
      this.belongsTo(models.section);
    }
  }
  CadetSection.init(
    {
      cadetId: {
        type: DataTypes.INTEGER,
        references: {
          model: "cadet",
          key: "id",
        },
      },
      sectionId: {
        type: DataTypes.INTEGER,
        references: {
          model: "section",
          key: "id",
        },
      },
      completed: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "cadetSection",
    }
  );
  return CadetSection;
};
