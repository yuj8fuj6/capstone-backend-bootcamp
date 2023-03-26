"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Planning_type extends Model {
    static associate(models) {
      // define association here
    }
  }
  Planning_type.init(
    {
      postal_code: DataTypes.STRING,
      address: DataTypes.STRING,
      land_use: DataTypes.STRING,
      gross_floor_area: DataTypes.STRING,
      gross_plot_ratio: DataTypes.TEXT,
      site_area: DataTypes.STRING,
      building_height: DataTypes.STRING,
      building_height_control: DataTypes.TEXT,
      no_of_dwelling_units: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "planning_type",
      underscored: true,
      timestamps: false,
    },
  );
  return Planning_type;
};
