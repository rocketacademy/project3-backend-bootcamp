"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "notes",
      [
        {
          due_by: "2022-08-20 02:59:00.000 +0900",
          cadet_id: 1,
          input1: "hello world",
          input2: "hu dis",
          input3: "is me",
          createdAt: "2022-08-19 02:59:00.000 +0900",
          updatedAt: "2022-08-19 02:59:00.000 +0900",
        },
        {
          due_by: "2022-08-22 02:59:00.000 +0900",
          cadet_id: 2,
          input1: "bye world",
          input2: "not me",
          input3: "is you",
          createdAt: "2022-08-21 02:59:00.000 +0900",
          updatedAt: "2022-08-21 02:59:00.000 +0900",
        },
        {
          due_by: "2022-08-20 02:59:00.000 +0900",
          cadet_id: 3,
          input1: "earth world",
          input2: "blue green",
          input3: "black space",
          createdAt: "2022-08-19 02:59:00.000 +0900",
          updatedAt: "2022-08-19 02:59:00.000 +0900",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("notes", null, {});
  },
};
