"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "cadets",
      [
        {
          name: "Adam",
          email: "adam@mail.com",
          photoLink:
            "https://firebasestorage.googleapis.com/v0/b/stayhere-a8896.appspot.com/o/images%2FDeath_star1.png?alt=media&token=2873f532-8b3f-40f0-8f67-b9628600784e",
          class: "PTBC4",
          admin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jermaine",
          email: "jermaine@mail.com",
          photoLink:
            "https://firebasestorage.googleapis.com/v0/b/stayhere-a8896.appspot.com/o/images%2FLuigis-Mansion-3-Switch-Multiplayer.jpg?alt=media&token=c5885cb4-dea5-4802-96a6-e1e8cf4575b0",
          class: "PTBC4",
          admin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Wei Yu",
          email: "weiyu@mail.com",
          photoLink:
            "https://firebasestorage.googleapis.com/v0/b/stayhere-a8896.appspot.com/o/images%2FU_gundam_01.jpg?alt=media&token=55e57404-60c8-4b82-95b6-f150c0d37974",
          class: "PTBC4",
          admin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("cadets", null, {});
  },
};
