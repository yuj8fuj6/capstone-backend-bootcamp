"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // await queryInterface.bulkInsert(
    //   "planning_code_model_buildings",
    //   [
    //     {
    //       // code_id: 1,
    //       // building_id: 1,
    //     },
    //   ],
    //   {},
    // );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("planning_code_model_buildings", null, {});
  },
};
