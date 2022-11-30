"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "sls",
      [
        {
          name: "Yew Wee",
          email: "yewwee@mail.com",
          photoLink:
            "https://uploads-ssl.webflow.com/63272a48849152178901e15a/635645b4e708dc1281513d15_Yee%20Wee-%20Testimonial%20Rocket%20Academy.png",
          admin: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sam O",
          email: "samo@mail.com",
          photoLink:
            "https://uploads-ssl.webflow.com/63272a48849152178901e15a/63498e40d2f3b4344507d398_SAMO-p-500.png",
          admin: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kai",
          email: "kai@mail.com",
          photoLink:
            "https://uploads-ssl.webflow.com/63272a48849152178901e15a/63498e5aa76f03cb5ceadee7_KAI-p-500.png",
          admin: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("sls", null, {});
  },
};
