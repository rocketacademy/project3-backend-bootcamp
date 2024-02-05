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
    await queryInterface.createTable("users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      username: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      first_name: {
        type: Sequelize.STRING,
      },

      last_name: {
        type: Sequelize.STRING,
      },

      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      profile_picture: {
        type: Sequelize.STRING,
      },

      bio: {
        type: Sequelize.STRING,
      },

      style: {
        type: Sequelize.STRING,
      },

      address: {
        type: Sequelize.STRING,
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

    await queryInterface.createTable("categories", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      name: {
        type: Sequelize.STRING,
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
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.dropTable("users");
    await queryInterface.dropTable("categories");
  },
};
