"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("reviews", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        type: Sequelize.INTEGER,
      },
      product_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "products",
          key: "id",
        },
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
      },
      content: {
        type: Sequelize.STRING,
      },
      rating_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "rating_categories",
          key: "id",
        },
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
      await queryInterface.createTable("product_categories", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          unique: true,
          type: Sequelize.INTEGER,
        },
        product_id: {
          type: Sequelize.INTEGER,
          references: {
            model: "products",
            key: "id",
          },
        },
        category_id: {
          type: Sequelize.INTEGER,
          references: {
            model: "categories",
            key: "id",
          },
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
    await queryInterface.dropTable("product_categories");
    await queryInterface.dropTable("reviews");
  },
};
