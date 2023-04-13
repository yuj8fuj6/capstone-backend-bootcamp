"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Planning_code_check extends Model {
    static associate(models) {
      this.belongsTo(models.user);
      this.belongsTo(models.building);
      this.belongsTo(models.planning_code);
    }
  }
  Planning_code_check.init(
    {
      planning_code_id: {
        type: DataTypes.INTEGER,
        references: { model: "planning_code", key: "id" },
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
      modelName: "planning_code_check",
      underscored: true,
    },
  );
  return Planning_code_check;
};
