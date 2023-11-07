'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('properties', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      propertymanager_id: {
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      propertytype: {
        type: Sequelize.STRING
      },
      configuration: {
        type: Sequelize.STRING
      },
      floorsize: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.TEXT
      },
      amenities: {
        type: Sequelize.STRING
      },
      roomrate: {
        type: Sequelize.INTEGER
      },
      coordinates: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('properties');
  }
};