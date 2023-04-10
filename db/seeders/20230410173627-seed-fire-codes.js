"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // await queryInterface.bulkInsert(
    //   "fire_codes",
    //   [
    //     {
    //       // authority_id: 3,
    //       // chapter: "",
    //       // clause_no: "",
    //       // content: "",
    //       // url: "",
    //     },
    //   ],
    //   {},
    // );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("fire_codes", null, {});
  },
};
