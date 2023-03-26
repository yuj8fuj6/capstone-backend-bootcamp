const { planning_parameter, planning_type } = require("../db/models");

const e = require("express");

// Retrieve location planning parameter

const getOnePlanningParam = async (req, res) => {
  const { address } = req.query;

  try {
    const planningParam = await planning_parameter.findOne({
      where: { address: address },
    });
    return res.json(planningParam);
  } catch (err) {
    return res.status(400).json({ error: true, msg: err });
  }
};

// Retrieve location planning type

const getOnePlanningType = async (req, res) => {
  const { postal_code } = req.query;

  try {
    const planningType = await planning_type.findOne({
      where: { postal_code: postal_code },
    });
    return res.json(planningType);
  } catch (err) {
    return res.status(400).json({ error: true, msg: err });
  }
};

module.exports = {
  getOnePlanningParam,
  getOnePlanningType,
};
