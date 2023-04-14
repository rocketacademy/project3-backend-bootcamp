"use strict";
const { Model } = require("sequelize");
export default (sequelize, DataTypes) => {
  class Questionnaire extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Questionnaire.init(
    {
      users_class_subject_id: DataTypes.INTEGER,
      question: DataTypes.STRING,
      option_a: DataTypes.STRING,
      option_b: DataTypes.STRING,
      option_c: DataTypes.STRING,
      option_d: DataTypes.STRING,
      option_e: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "questionnaire",
      underscored: true,
    }
  );
  return Questionnaire;
};