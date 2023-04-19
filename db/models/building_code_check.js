"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Building_code_check extends Model {
    static associate(models) {
      this.belongsTo(models.user);
      this.belongsTo(models.building);
      this.belongsTo(models.building_code);
    }
  }
  Building_code_check.init(
    {
      building_code_id: {
        type: DataTypes.INTEGER,
        references: { model: "building_code", key: "id" },
      },
      check: DataTypes.BOOLEAN,
      building_id: {
        type: DataTypes.INTEGER,
        references: { model: "building", key: "id" },
      },
      user_id: {
        type: DataTypes.UUID,
        references: { model: "user", key: "id" },
      },
    },
    {
      sequelize,
      modelName: "building_code_check",
      underscored: true,
    },
  );
  return Building_code_check;
};
