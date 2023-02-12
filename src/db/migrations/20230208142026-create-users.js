'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "users",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        first_name: {
          type: Sequelize.STRING,
        },
        last_name: {
          type: Sequelize.STRING,
        },
        phone_number: {
          type: Sequelize.INTEGER,
        },
        email: {
          type: Sequelize.STRING,
        },
        password: {
          type: Sequelize.STRING,
        },
        address: {
          type: Sequelize.STRING,
        },
        postal_code: {
          type: Sequelize.INTEGER,
        },
        role: {
          defaultValue: "user",
          type: Sequelize.STRING,
        },
        mrt: {
          type: Sequelize.STRING,
        },
        username: {
          type: Sequelize.STRING,
        },
        profile_photo: {
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
      },
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};