"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "appointments",
      [
        {
          start_datetime: "2022-08-19 22:59:00.000 +0900",
          end_datetime: "2022-08-19 23:59:00.000 +0900",
          sl_id: 1,
          cadet_id: 1,
          current_sl: false,
          createdAt: "2022-08-10 10:30:09.410 +0900",
          updatedAt: "2022-08-10 10:30:09.410 +0900",
        },
        {
          start_datetime: "2022-08-23 14:59:00.000 +0900",
          end_datetime: "2022-08-23 15:59:00.000 +0900",
          sl_id: 1,
          cadet_id: 2,
          current_sl: true,
          createdAt: "2022-08-20 10:30:09.410 +0900",
          updatedAt: "2022-08-20 10:30:09.410 +0900",
        },
        {
          start_datetime: "2022-09-26 11:59:00.000 +0900",
          end_datetime: "2022-09-26 12:59:00.000 +0900",
          sl_id: 2,
          cadet_id: 3,
          current_sl: true,
          createdAt: "2022-09-20 10:30:09.410 +0900",
          updatedAt: "2022-09-20 10:30:09.410 +0900",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("appointments", null, {});
  },
};
