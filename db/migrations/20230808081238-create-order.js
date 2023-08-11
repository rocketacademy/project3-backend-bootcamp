"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("orders", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
      },
      order_date: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      total_price: {
        allowNull: false,
        type: Sequelize.DECIMAL,
      },
      shipping_method_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "shipping_methods",
          key: "id",
        },
      },
      user_discount_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "user_discounts",
          key: "id",
        },
      },
      user_discount_amount: {
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
    }),
      await queryInterface.createTable("events", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          unique: true,
          type: Sequelize.INTEGER,
        },
        name: {
          allowNull: false,
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
      await queryInterface.createTable("order_histories", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          unique: true,
          type: Sequelize.INTEGER,
        },
        order_id: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: {
            model: "orders",
            key: "id",
          },
        },
        event_type: {
          type: Sequelize.INTEGER,
          references: {
            model: "events",
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
    await queryInterface.dropTable("order_histories");
    await queryInterface.dropTable("events");
    await queryInterface.dropTable("orders");
  },
};
