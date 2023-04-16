"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Accessibility_code extends Model {
    static associate(models) {
      this.belongsTo(models.authority);
      this.belongsToMany(models.model_building, {
        through: "accessibility_code_model_buildings",
        foreignKey: "code_id",
      });
      this.hasOne(models.accessibility_code_check);
    }
  }
  Accessibility_code.init(
    {
      authority_id: {
        type: DataTypes.INTEGER,
        references: { model: "authority", key: "id" },
      },
      chapter: DataTypes.STRING,
      clause_no: DataTypes.STRING,
      content: DataTypes.TEXT,
      page_no: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "accessibility_code",
      underscored: true,
    },
  );
  return Accessibility_code;
};
