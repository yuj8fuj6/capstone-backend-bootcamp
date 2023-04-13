"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Planning_code extends Model {
    static associate(models) {
      this.belongsTo(models.authority);
      this.belongsToMany(models.model_building, {
        through: "planning_code_model_buildings",
      });
      this.hasOne(models.planning_code_check);
    }
  }
  Planning_code.init(
    {
      authority_id: {
        type: DataTypes.INTEGER,
        references: { model: "authority", key: "id" },
      },
      header: DataTypes.TEXT,
      content: DataTypes.TEXT,
      url: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "planning_code",
      underscored: true,
    },
  );
  return Planning_code;
};
