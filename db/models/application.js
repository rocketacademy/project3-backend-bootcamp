const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Application extends Model {
    static associate(models) {
      this.belongsTo(models.talent, { foreignKey: "talentId" });
      this.belongsTo(models.jobListing, { foreignKey: "jobListingId" });
    }
  }
  Application.init(
    {
      applicationStatus: DataTypes.STRING,
      talentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      jobListingId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "application", //non-plurul
      underscored: true,
    }
  );
  return Application;
};
