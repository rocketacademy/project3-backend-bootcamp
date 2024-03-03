'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('baskets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sellerId: {
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      originalPrice: {
        type: Sequelize.INTEGER
      },
      discountedPrice: {
        type: Sequelize.INTEGER
      },
      pickupStartTime: {
        type: Sequelize.DATE
      },
      pickupEndTime: {
        type: Sequelize.DATE
      },
      stock: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.TEXT
      },
      allergens: {
        type: Sequelize.TEXT
      },
      photo: {
        type: Sequelize.TEXT
      },
      weightPerUnit: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('baskets');
  }
};