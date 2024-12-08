"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class JobListing extends Model {
    static associate(models) {
      this.belongsTo(models.employer, { foreignKey: "employerId" });
      this.hasMany(models.application, { foreignKey: "jobListingId" });
      this.belongsToMany(models.benefit, { through: "job_listing_benefits" });
    }
  }
  JobListing.init(
    {
      jobTitle: DataTypes.STRING,
      description: DataTypes.STRING,
      jobResponsibility: DataTypes.STRING,
      skillSet: DataTypes.STRING,
      applicationStartDate: DataTypes.STRING,
      applicationEndDate: DataTypes.STRING,
      employerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "jobListing",
      underscored: true,
    }
  );

  return JobListing;
};
