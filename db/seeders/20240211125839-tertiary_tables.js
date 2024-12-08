"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  //why are there TWO job_listing_benefits tables????
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("job_listing_benefits", [
      {
        job_listing_id: 1,
        benefit_id: 1,
      },
      {
        job_listing_id: 1,
        benefit_id: 3,
      },
      {
        job_listing_id: 1,
        benefit_id: 7,
      },
    ]);

    await queryInterface.bulkInsert("talent_benefits", [
      {
        talent_id: 1,
        benefit_id: 2,
      },
      {
        talent_id: 1,
        benefit_id: 4,
      },
      {
        talent_id: 1,
        benefit_id: 6,
      },
      {
        talent_id: 2,
        benefit_id: 7,
      },
      {
        talent_id: 2,
        benefit_id: 3,
      },
      {
        talent_id: 2,
        benefit_id: 5,
      },
      {
        talent_id: 3,
        benefit_id: 3,
      },
      {
        talent_id: 3,
        benefit_id: 2,
      },
      {
        talent_id: 3,
        benefit_id: 10,
      },
      //talent benefits for louis
      {
        talent_id: 4,
        benefit_id: 1,
      },
      {
        talent_id: 4,
        benefit_id: 2,
      },
      {
        talent_id: 4,
        benefit_id: 4,
      },
      //talent benefits for Joseph
      {
        talent_id: 5,
        benefit_id: 8,
      },
      {
        talent_id: 5,
        benefit_id: 7,
      },
      {
        talent_id: 5,
        benefit_id: 6,
      },
      //talent benefits for Klein
      {
        talent_id: 6,
        benefit_id: 5,
      },
      {
        talent_id: 6,
        benefit_id: 2,
      },
      {
        talent_id: 6,
        benefit_id: 9,
      },
    ]);

    // await queryInterface.bulkInsert("messages", [
    //   {
    //     talent_id: 1,
    //     chatroom_id: 1,
    //     message: "Hello, I am interested in the job listing.",
    //   },
    // ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("job_listing_benefits");
    await queryInterface.dropTable("talent_benefits");
    // await queryInterface.dropTable("messages");
  },
};
