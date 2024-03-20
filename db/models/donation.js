"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class donation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.user, { as: "bene" });
      this.belongsTo(models.user, { as: "donor" });
      this.hasMany(models.request);
      this.belongsTo(models.book);
    }
  }
  donation.init(
    {
      donor_id: DataTypes.INTEGER,
      book_id: DataTypes.INTEGER,
      bene_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "donation",
      underscored: true,
    }
  );
  return donation;
};
