"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "listings",
      [
        {
          photo_url:
            "https://res.cloudinary.com/dwgeik14h/image/upload/v1675874251/adidas_stan_smith.jpg",
          category: "shoes",
          item_name: "Adidas Stan Smith",
          description:
            "Bought this during a sale 6 months ago, but did not get the chance to wear it. White with green at the back.",
          condition: "Brand New",
          listing_type: "Give",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          photo_url:
            "https://res.cloudinary.com/dwgeik14h/image/upload/v1675874305/nike_air_force_1.jpg",
          category: "shoes",
          item_name: "Nike Air Force 1",
          description:
            "Bought it because my friend ask me to, but it is the wrong size, So I am giving it away for free!",
          condition: "Brand New",
          listing_type: "Give",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          photo_url:
            "https://res.cloudinary.com/dwgeik14h/image/upload/v1675874251/white_school_shoes.jpg",
          category: "shoes",
          item_name: "White School Shoes",
          description:
            "Asking for donation of a size 12 for my child to go to school. Any condition will do. Old shoes also okay. We are poor and have problems paying the bills already! Much appreciated!",
          condition: "Any",
          listing_type: "Take",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("listings", null, {});
  },
};
