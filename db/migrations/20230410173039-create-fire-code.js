"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("fire_codes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      authority_id: {
        type: Sequelize.INTEGER,
        references: { model: "authorities", key: "id" },
      },
      chapter: {
        type: Sequelize.STRING,
      },
      clause_no: {
        type: Sequelize.STRING,
      },
      content: {
        type: Sequelize.TEXT,
      },
      url: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("fire_codes");
  },
};
