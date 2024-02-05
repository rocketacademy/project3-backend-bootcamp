"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.createTable("reviews", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
      },

      listing_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "listings",
          key: "id",
        },
      },

      comment: {
        type: Sequelize.STRING,
      },

      rating: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      created_at: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },

      updated_at: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
    });

    await queryInterface.createTable("likes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
      },

      listing_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "listings",
          key: "id",
        },
      },

      created_at: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },

      updated_at: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.dropTable("reviews");
    await queryInterface.dropTable("likes");
  },
};
