"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
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
  Post.init(
    {
      author: {
        type: DataTypes.INTEGER,
        references: { model: "cadet", key: "id" },
      },
      chapterId: {
        type: DataTypes.INTEGER,
        references: {
          model: "chapter",
          key: "id",
        },
      },
      content: DataTypes.TEXT,
      views: DataTypes.INTEGER,
      upvotes: DataTypes.INTEGER,
      time: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "post",
    }
  );
  return Post;
};
