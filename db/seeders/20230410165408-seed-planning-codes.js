"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // await queryInterface.bulkInsert(
    //   "planning_codes",
    //   [
    //     {
    //       // authority_id: 1,
    //       // header: "",
    //       // content: "",
    //       // url: "",
    //     },
    //   ],
    //   {},
    // );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("planning_codes", null, {});
  },
};
