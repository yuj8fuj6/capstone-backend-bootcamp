"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Building extends Model {
    static associate(models) {
      this.belongsTo(models.user);
    }
  }
  Building.init(
    {
      building_type: DataTypes.STRING,
      ura_category: DataTypes.STRING,
      scdf_category: DataTypes.STRING,
      usage: DataTypes.STRING,
      floor_no: DataTypes.INTEGER,
      basement_floor_no: DataTypes.INTEGER,
      building_height: DataTypes.DECIMAL,
      avg_floor_height: DataTypes.DECIMAL,
      gfa: DataTypes.DECIMAL,
      site_area: DataTypes.DECIMAL,
      plot_ratio: DataTypes.DECIMAL,
      site_coverage: DataTypes.INTEGER,
      habitable_height: DataTypes.DECIMAL,
      postal_code: DataTypes.STRING,
      block_no: DataTypes.STRING,
      street_name: DataTypes.STRING,
      user_id: {
        type: DataTypes.UUID,
        references: { model: "user", key: "id" },
      },
    },
    {
      sequelize,
      modelName: "building",
      underscored: true,
    },
  );
  return Building;
};
