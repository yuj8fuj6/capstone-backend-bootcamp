"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("planning_code_checks", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      planning_code_id: {
        type: Sequelize.INTEGER,
        references: { model: "planning_codes", key: "id" },
      },
      check: {
        type: Sequelize.BOOLEAN,
      },
      building_id: {
        type: Sequelize.INTEGER,
        references: { model: "buildings", key: "id" },
      },
      user_id: {
        type: Sequelize.UUID,
        references: { model: "users", key: "id" },
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
    await queryInterface.dropTable("planning_code_checks");
  },
};
