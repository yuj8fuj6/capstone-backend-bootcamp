"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // await queryInterface.bulkInsert(
    //   "gfa_codes",
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
    await queryInterface.bulkDelete("gfa_codes", null, {});
  },
};
