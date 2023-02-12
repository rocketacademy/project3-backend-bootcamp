"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        first_name: "Carmen",
        last_name: "Lau",
        phone_number: 98320709,
        email: "carmen@gmail.com",
        password: "12345678",
        address: "123 Carmen Road",
        postal_code: 123456,
        role: "user",
        mrt: "Jurong West",
        username: "yummyz",
        profile_photo: "abcd",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        first_name: "Valerie",
        last_name: "Ho",
        phone_number: 98807195,
        email: "valerie@gmail.com",
        password: "12345678",
        address: "123 Valerie Road",
        postal_code: 123456,
        role: "user",
        mrt: "Woodlands",
        username: "ohnoz",
        profile_photo: "bcde",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        first_name: "JJ",
        last_name: "Pang",
        phone_number: 98155299,
        email: "jinjia@gmail.com",
        password: "12345678",
        address: "123 JJ Road",
        postal_code: 123456,
        role: "user",
        mrt: "Bedok",
        username: "pokemonz",
        profile_photo: "cdef",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
