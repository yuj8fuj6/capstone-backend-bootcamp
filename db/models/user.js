"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.hasOne(models.authority);
      this.hasMany(models.post);
      this.hasMany(models.post_upvote);
      this.hasMany(models.thread);
      this.hasMany(models.thread_upvote);
      this.hasMany(models.building);
      this.hasMany(models.gfa_code_check);
      this.hasMany(models.planning_code_check);
      this.hasMany(models.accessibility_code_check);
      this.hasMany(models.building_code_check);
      this.hasMany(models.fire_code_check);
    }
  }
  User.init(
    {
      name: DataTypes.TEXT,
      dob: DataTypes.DATEONLY,
      gender: DataTypes.STRING,
      citizenship: DataTypes.STRING,
      residential_status: DataTypes.STRING,
      contact_no: DataTypes.INTEGER,
      email: DataTypes.STRING,
      professional_no: DataTypes.INTEGER,
      firm: DataTypes.STRING,
      designation: DataTypes.STRING,
      block_no: DataTypes.STRING,
      street_name: DataTypes.STRING,
      building_name: DataTypes.STRING,
      unit_no: DataTypes.STRING,
      postal_code: DataTypes.STRING,
      photo_url: DataTypes.STRING,
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "user",
      underscored: true,
    },
  );
  return User;
};
