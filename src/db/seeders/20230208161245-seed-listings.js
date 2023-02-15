"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "listings",
      [
        {
          user_id: 1,
          photo_url:
            "https://res.cloudinary.com/dwgeik14h/image/upload/v1675874251/adidas_stan_smith.jpg",
          category: "Shoes",
          item_name: "Adidas Stan Smith",
          description:
            "Bought this during a sale 6 months ago, but did not get the chance to wear it. White with green at the back.",
          condition: "Brand New",
          listing_type: "Give",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 2,
          photo_url:
            "https://res.cloudinary.com/dwgeik14h/image/upload/v1675874305/nike_air_force_1.jpg",
          category: "Shoes",
          item_name: "Nike Air Force 1",
          description:
            "Bought it because my friend ask me to, but it is the wrong size, So I am giving it away for free!",
          condition: "Like New",
          listing_type: "Give",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 3,
          photo_url:
            "https://res.cloudinary.com/dwgeik14h/image/upload/v1675874251/white_school_shoes.jpg",
          category: "Shoes",
          item_name: "White School Shoes",
          description:
            "Asking for donation of a size 12 for my child to go to school. Any condition will do. Old shoes also okay. We are poor and have problems paying the bills already! Much appreciated!",
          condition: "Any",
          listing_type: "Take",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 1,
          photo_url:
            "https://res.cloudinary.com/dwgeik14h/image/upload/v1676225698/Harry_Potter_and_the_Deathly_Hallows.jpg",
          category: "Books",
          item_name: "Harry Potter and the Deathly Hallows",
          description:
            "My kid wants to read this but I can't find it anywhere!",
          condition: "Any",
          listing_type: "Take",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 2,
          photo_url:
            "https://res.cloudinary.com/dwgeik14h/image/upload/v1676225805/animal_abc.jpg",
          category: "Books",
          item_name: "Animal ABC",
          description:
            "My kid is 2 years old, I think this good is good for him. Time to strt reading!",
          condition: "Brand New",
          listing_type: "Take",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 3,
          photo_url:
            "https://res.cloudinary.com/dwgeik14h/image/upload/v1676227255/animal_shirt.jpg",
          category: "Clothes",
          item_name: "Animal shirt",
          description: "So cute! But my girl has overgrown the shirt",
          condition: "Well Used",
          listing_type: "Give",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 1,
          photo_url:
            "https://res.cloudinary.com/dwgeik14h/image/upload/v1676227383/longsleeve_shirt.jpg",
          category: "Clothes",
          item_name: "Long sleeve shirt",
          description: "Weather is too hot. Not wearing",
          condition: "Well Used",
          listing_type: "Give",
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
