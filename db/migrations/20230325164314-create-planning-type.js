"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("planning_types", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      postal_code: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
      },
      land_use: {
        type: Sequelize.STRING,
      },
      gross_floor_area: {
        type: Sequelize.STRING,
      },
      gross_plot_ratio: {
        type: Sequelize.TEXT,
      },
      site_area: {
        type: Sequelize.STRING,
      },
      building_height: {
        type: Sequelize.STRING,
      },
      building_height_control: {
        type: Sequelize.TEXT,
      },
      no_of_dwelling_units: {
        type: Sequelize.INTEGER,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("planning_types");
  },
};
