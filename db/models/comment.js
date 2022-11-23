"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.chapter);
    }
  }
  comment.init(
    {
      content: DataTypes.TEXT,
      chapterId: {
        type: DataTypes.INTEGER,
        references: {
          model: "chapter",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "comment",
    }
  );
  return comment;
};
