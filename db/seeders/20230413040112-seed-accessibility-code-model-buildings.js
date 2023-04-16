"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "accessibility_code_model_buildings",
      [
        {
          code_id: 1,
          building_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(
      "accessibility_code_model_buildings",
      null,
      {},
    );
  },
};
