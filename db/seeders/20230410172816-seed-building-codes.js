"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "building_codes",
      [
        {
          authority_id: 2,
          chapter: "2",
          clause_no: "1.2",
          content: "Test",
          page_no: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("building_codes", null, {});
  },
};
