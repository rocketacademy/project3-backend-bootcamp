"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("orders", [
      {
        user_id: 3,
        order_date: new Date(),
        total_price: 333.45,
        shipping_method: 1,
        user_discount_id: 2,
        user_discount_amount: 33.53,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 4,
        order_date: new Date(),
        total_price: 2254.9,
        shipping_method: 1,
        user_discount_id: 3,
        user_discount_amount: 347.19,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 5,
        order_date: new Date(),
        total_price: 190.3,
        shipping_method: 1,
        user_discount_id: 2,
        user_discount_amount: 9.52,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 6,
        order_date: new Date(),
        total_price: 2054.3,
        shipping_method: 1,
        user_discount_id: 3,
        user_discount_amount: 317.55,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("orders", null, {});
  },
};
