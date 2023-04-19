"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("accessibility_code_model_buildings", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      code_id: {
        type: Sequelize.INTEGER,
        references: { model: "accessibility_codes", key: "id" },
      },
      building_id: {
        type: Sequelize.INTEGER,
        references: { model: "model_buildings", key: "id" },
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("accessibility_code_model_buildings");
  },
};
