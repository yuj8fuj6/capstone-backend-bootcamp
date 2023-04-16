"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Model_building extends Model {
    static associate(models) {
      this.belongsToMany(models.gfa_code, {
        through: "gfa_code_model_buildings",
        foreignKey: "building_id",
      });
      this.belongsToMany(models.planning_code, {
        through: "planning_code_model_buildings",
        foreignKey: "building_id",
      });
      this.belongsToMany(models.accessibility_code, {
        through: "accessibility_code_model_buildings",
        foreignKey: "building_id",
      });
      this.belongsToMany(models.building_code, {
        through: "building_code_model_buildings",
        foreignKey: "building_id",
      });
      this.belongsToMany(models.fire_code, {
        through: "fire_code_model_buildings",
        foreignKey: "building_id",
      });
    }
  }
  Model_building.init(
    {
      building_type: DataTypes.STRING,
      ura_category: DataTypes.STRING,
      scdf_category: DataTypes.STRING,
      usage: DataTypes.STRING,
      floor_no: DataTypes.RANGE(DataTypes.INTEGER),
      basement_floor_no: DataTypes.RANGE(DataTypes.INTEGER),
      building_height: DataTypes.RANGE(DataTypes.DECIMAL),
      avg_floor_height: DataTypes.RANGE(DataTypes.DECIMAL),
      gfa: DataTypes.RANGE(DataTypes.DECIMAL),
      site_area: DataTypes.RANGE(DataTypes.DECIMAL),
      plot_ratio: DataTypes.RANGE(DataTypes.DECIMAL),
      site_coverage: DataTypes.RANGE(DataTypes.INTEGER),
      habitable_height: DataTypes.RANGE(DataTypes.DECIMAL),
    },
    {
      sequelize,
      modelName: "model_building",
      underscored: true,
      timestamps: false,
    },
  );
  return Model_building;
};
