"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("rating_categories", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    }),
      await queryInterface.createTable("seller_discounts", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          unique: true,
          type: Sequelize.INTEGER,
        },
        name: {
          type: Sequelize.STRING,
        },
        description: {
          type: Sequelize.STRING,
        },
        discount_amount: {
          type: Sequelize.DECIMAL,
        },
        valid_till: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      }),
      await queryInterface.createTable("shipping_methods", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          unique: true,
          type: Sequelize.INTEGER,
        },
        name: {
          type: Sequelize.STRING,
        },
        description: {
          type: Sequelize.STRING,
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      }),
      await queryInterface.createTable("user_discounts", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          unique: true,
          type: Sequelize.INTEGER,
        },
        name: {
          type: Sequelize.STRING,
        },
        description: {
          type: Sequelize.STRING,
        },
        discount_amount: {
          type: Sequelize.DECIMAL,
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
    await queryInterface.dropTable("user_discounts");
    await queryInterface.dropTable("shipping_methods");
    await queryInterface.dropTable("seller_discounts");
    await queryInterface.dropTable("rating_categories");
  },
};
