"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Fire_code_check extends Model {
    static associate(models) {
      this.belongsTo(models.user);
      this.belongsTo(models.building);
      this.belongsTo(models.fire_code);
    }
  }
  Fire_code_check.init(
    {
      fire_code_id: {
        type: DataTypes.INTEGER,
        references: { model: "fire_code", key: "id" },
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
      modelName: "fire_code_check",
      underscored: true,
    },
  );
  return Fire_code_check;
};
