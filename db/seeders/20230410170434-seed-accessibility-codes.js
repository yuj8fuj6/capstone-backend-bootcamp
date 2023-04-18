"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "accessibility_codes",
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
        {
          authority_id: 2,
          chapter: "3",
          clause_no: "1.3",
          content: "Test2",
          page_no: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          authority_id: 2,
          chapter: "4",
          clause_no: "1.4",
          content: "Test4",
          page_no: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("accessibility_codes", null, {});
  },
};
