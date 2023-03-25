"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Planning_parameter extends Model {
    static associate(models) {
      // define association here
    }
  }
  Planning_parameter.init(
    {
      decision_date: DataTypes.TEXT,
      address: DataTypes.TEXT,
      submission_desc: DataTypes.TEXT,
      decision_type: DataTypes.TEXT,
      appl_type: DataTypes.TEXT,
      deleted_ind: DataTypes.TEXT,
      mkts_lotno: DataTypes.TEXT,
      dr_id: DataTypes.TEXT,
      submission_no: DataTypes.TEXT,
      decision_no: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "planning_parameter",
      underscored: true,
      timestamps: false,
    },
  );
  return Planning_parameter;
};
