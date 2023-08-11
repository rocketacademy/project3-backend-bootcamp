"use strict";

const fs = require("fs");
const csv = require("csv-parser");
// const photo = require("../models/photo");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const results = [];
    return new Promise((resolve, reject) => {
      fs.createReadStream("./assets/photo.csv")
        .pipe(csv())
        .on("data", (data) => {
          const index = Number(data.index);
          const product_id = Number(data.product_id);
          data.index = index;
          data.product_id = product_id;
          results.push(data);
        })
        .on("end", () => {
          console.log(results);
          queryInterface
            .bulkInsert("photos", results)
            .then(() => {
              resolve();
            })
            .catch((error) => {
              console.error(error);
              reject(error);
            });
        });
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("photos", null, {});
  },
};
