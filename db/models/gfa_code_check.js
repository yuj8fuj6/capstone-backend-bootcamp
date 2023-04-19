"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Gfa_code_check extends Model {
    static associate(models) {
      this.belongsTo(models.user);
      this.belongsTo(models.building);
      this.belongsTo(models.gfa_code);
    }
  }
  Gfa_code_check.init(
    {
      gfa_code_id: {
        type: DataTypes.INTEGER,
        references: { model: "gfa_code", key: "id" },
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
      modelName: "gfa_code_check",
      underscored: true,
    },
  );
  return Gfa_code_check;
};
