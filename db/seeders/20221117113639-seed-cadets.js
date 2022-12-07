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
            "https://img1.ak.crunchyroll.com/i/spire1/9ba7326ca5b194a03dcdf6e2c1609bc51652761752_large.jpg",
          class: "PTBC4",
          admin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jermaine",
          email: "jermaine@mail.com",
          photoLink:
            "https://www.giantbomb.com/a/uploads/scale_medium/1/16207/1818877-quatre.jpg",
          class: "PTBC4",
          admin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Wei Yu",
          email: "weiyu@mail.com",
          photoLink:
            "https://www.giantbomb.com/a/uploads/square_small/1/12165/359555-heero_yuy.jpg",
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
