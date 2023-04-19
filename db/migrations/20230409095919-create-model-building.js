"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("model_buildings", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      building_type: {
        type: Sequelize.STRING,
      },
      ura_category: {
        type: Sequelize.STRING,
      },
      scdf_category: {
        type: Sequelize.STRING,
      },
      usage: {
        type: Sequelize.STRING,
      },
      floor_no: {
        type: Sequelize.DataTypes.RANGE(Sequelize.DataTypes.INTEGER),
      },
      basement_floor_no: {
        type: Sequelize.DataTypes.RANGE(Sequelize.DataTypes.INTEGER),
      },
      building_height: {
        type: Sequelize.DataTypes.RANGE(Sequelize.DataTypes.DECIMAL),
      },
      avg_floor_height: {
        type: Sequelize.DataTypes.RANGE(Sequelize.DataTypes.DECIMAL),
      },
      gfa: {
        type: Sequelize.DataTypes.RANGE(Sequelize.DataTypes.DECIMAL),
      },
      site_area: {
        type: Sequelize.DataTypes.RANGE(Sequelize.DataTypes.DECIMAL),
      },
      plot_ratio: {
        type: Sequelize.DataTypes.RANGE(Sequelize.DataTypes.DECIMAL),
      },
      site_coverage: {
        type: Sequelize.DataTypes.RANGE(Sequelize.DataTypes.INTEGER),
      },
      habitable_height: {
        type: Sequelize.DataTypes.RANGE(Sequelize.DataTypes.DECIMAL),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("model_buildings");
  },
};
