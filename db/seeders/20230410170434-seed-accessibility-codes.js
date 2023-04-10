"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // await queryInterface.bulkInsert(
    //   "accessibility_codes",
    //   [
    //     {
    //       // authority_id: 2,
    //       // chapter: "",
    //       // clause_no: "",
    //       // content: "",
    //       // page_no: "",
    //     },
    //   ],
    //   {},
    // );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("accessibility_codes", null, {});
  },
};
