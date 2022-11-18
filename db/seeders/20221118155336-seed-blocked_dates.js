"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "blocked_dates",
      [
        {
          date: "2022-08-20 02:59:00.000 +0900",
          sl_id: 1,
          createdAt: "2022-08-19 02:59:00.000 +0900",
          updatedAt: "2022-08-19 02:59:00.000 +0900",
        },
        {
          date: "2022-08-21 02:59:00.000 +0900",
          sl_id: 1,
          createdAt: "2022-08-20 02:59:00.000 +0900",
          updatedAt: "2022-08-20 02:59:00.000 +0900",
        },
        {
          date: "2022-08-30 02:59:00.000 +0900",
          sl_id: 3,
          createdAt: "2022-08-20 02:59:00.000 +0900",
          updatedAt: "2022-08-20 02:59:00.000 +0900",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("blocked_dates", null, {});
  },
};
