"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Accessibility_code_check extends Model {
    static associate(models) {
      this.belongsTo(models.user);
      this.belongsTo(models.building);
      this.belongsTo(models.accessibility_code);
    }
  }
  Accessibility_code_check.init(
    {
      accessibility_code_id: {
        type: DataTypes.INTEGER,
        references: { model: "accessibility_code", key: "id" },
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
      modelName: "accessibility_code_check",
      underscored: true,
    },
  );
  return Accessibility_code_check;
};
