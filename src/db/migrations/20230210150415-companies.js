"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("companies", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      review_id: {
        type: Sequelize.BIGINT,
      },
      description: {
        type: Sequelize.STRING,
      },
      logo_url: {
        type: Sequelize.TEXT,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable("companies");
  },
};
