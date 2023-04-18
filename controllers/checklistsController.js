const {
  authority,
  user,
  building,
  model_building,
  gfa_code,
  planning_code,
  accessibility_code,
  building_code,
  fire_code,
  gfa_code_check,
  planning_code_check,
  accessibility_code_check,
  building_code_check,
  fire_code_check,
} = require("../db/models");

const e = require("express");

// Retrieve all authorities

const getAllAuthorities = async (req, res) => {
  try {
    const authorities = await authority.findAll({
      include: [
        {
          model: user,
          attributes: ["name", "firm", "designation", "photo_url"],
        },
      ],
    });
    return res.json(authorities);
  } catch (err) {
    return res.status(400).json({ error: true, msg: err });
  }
};

// Add new building and check against model building

const addOneBuilding = async (req, res) => {
  const {
    building_type,
    ura_category,
    scdf_category,
    usage,
    floor_no,
    basement_floor_no,
    building_height,
    avg_floor_height,
    gfa,
    site_area,
    plot_ratio,
    site_coverage,
    habitable_height,
    postal_code,
    block_no,
    street_name,
    user_id,
  } = req.body;
  try {
    if (
      building_type === "Industrial" &&
      ura_category === "Business 2 (Industrial)" &&
      scdf_category === "VI - Factory"
    ) {
      if (
        floor_no >= 1 &&
        floor_no < 6 &&
        basement_floor_no == 0 &&
        habitable_height <= 24
      ) {
        const modelBuilding = await model_building.findOne({
          where: { id: 1 },
          include: [
            {
              model: gfa_code,
            },
            {
              model: planning_code,
            },
            {
              model: accessibility_code,
            },
            {
              model: building_code,
            },
            {
              model: fire_code,
            },
          ],
        });
        const newBuilding = await building.findOrCreate({
          where: {
            building_type: building_type,
            ura_category: ura_category,
            scdf_category: scdf_category,
            usage: usage,
            floor_no: floor_no,
            basement_floor_no: basement_floor_no,
            building_height: building_height,
            avg_floor_height: avg_floor_height,
            gfa: gfa,
            site_area: site_area,
            plot_ratio: plot_ratio,
            site_coverage: site_coverage,
            habitable_height: habitable_height,
            postal_code: postal_code,
            block_no: block_no,
            street_name: street_name,
            user_id: user_id,
            model_building_id: 1,
          },
        });
        return res.json(modelBuilding);
      }
    } else if (
      building_type === "Residential" &&
      ura_category === "Bungalows or Detached Houses" &&
      scdf_category === "I - Small Residential"
    ) {
      if (
        floor_no >= 1 &&
        floor_no < 6 &&
        basement_floor_no == 0 &&
        habitable_height <= 24
      ) {
        const modelBuilding = await model_building.findOne({
          where: { id: 1 },
          include: [
            {
              model: gfa_code,
            },
            {
              model: planning_code,
            },
            {
              model: accessibility_code,
            },
            {
              model: building_code,
            },
            {
              model: fire_code,
            },
          ],
        });
        const newBuilding = await building.findOrCreate({
          where: {
            building_type: building_type,
            ura_category: ura_category,
            scdf_category: scdf_category,
            usage: usage,
            floor_no: floor_no,
            basement_floor_no: basement_floor_no,
            building_height: building_height,
            avg_floor_height: avg_floor_height,
            gfa: gfa,
            site_area: site_area,
            plot_ratio: plot_ratio,
            site_coverage: site_coverage,
            habitable_height: habitable_height,
            postal_code: postal_code,
            block_no: block_no,
            street_name: street_name,
            user_id: user_id,
            model_building_id: 1,
          },
        });
        return res.json(modelBuilding);
      }
    } else if (
      building_type === "Recreation" &&
      ura_category === "Sports and Recreation" &&
      scdf_category === "VII - Place of Public Resort"
    ) {
      if (
        floor_no >= 1 &&
        floor_no < 6 &&
        basement_floor_no == 0 &&
        habitable_height <= 24
      ) {
        const modelBuilding = await model_building.findOne({
          where: { id: 1 },
          include: [
            {
              model: gfa_code,
            },
            {
              model: planning_code,
            },
            {
              model: accessibility_code,
            },
            {
              model: building_code,
            },
            {
              model: fire_code,
            },
          ],
        });
        const newBuilding = await building.findOrCreate({
          where: {
            building_type: building_type,
            ura_category: ura_category,
            scdf_category: scdf_category,
            usage: usage,
            floor_no: floor_no,
            basement_floor_no: basement_floor_no,
            building_height: building_height,
            avg_floor_height: avg_floor_height,
            gfa: gfa,
            site_area: site_area,
            plot_ratio: plot_ratio,
            site_coverage: site_coverage,
            habitable_height: habitable_height,
            postal_code: postal_code,
            block_no: block_no,
            street_name: street_name,
            user_id: user_id,
            model_building_id: 1,
          },
        });
        return res.json(modelBuilding);
      }
    }
  } catch (err) {
    return res.status(400).json({ error: true, msg: err });
  }
};

// Get all buildings

const getAllBuildings = async (req, res) => {
  const { user_id } = req.params;
  try {
    const allBuildings = await building.findAll({
      where: { user_id: user_id },
      include: [
        {
          model: model_building,
          include: [
            {
              model: gfa_code,
            },
            {
              model: planning_code,
            },
            {
              model: accessibility_code,
            },
            {
              model: building_code,
            },
            {
              model: fire_code,
            },
          ],
        },
      ],
    });
    return res.json(allBuildings);
  } catch (err) {
    return res.status(400).json({ error: true, msg: err });
  }
};

// Check GFA code

const checkGfaCode = async (req, res) => {
  const { gfa_code_id, check, building_id, user_id } = req.body;
  try {
    const [newGfaCodeCheck, created] = await gfa_code_check.findOrCreate({
      where: {
        gfa_code_id: gfa_code_id,
        check: check,
        building_id: building_id,
        user_id: user_id,
      },
      include: [
        {
          model: gfa_code,
        },
      ],
    });
    if (!created) {
      await newGfaCodeCheck.destroy();
    }
    return res.json(newGfaCodeCheck);
  } catch (err) {
    return res.status(400).json({ error: true, msg: err });
  }
};

// Check Planning code

const checkPlanningCode = async (req, res) => {
  const { planning_code_id, check, building_id, user_id } = req.body;
  try {
    const [newPlanningCodeCheck, created] =
      await planning_code_check.findOrCreate({
        where: {
          planning_code_id: planning_code_id,
          check: check,
          building_id: building_id,
          user_id: user_id,
        },
        include: [
          {
            model: planning_code,
          },
        ],
      });
    if (!created) {
      await newPlanningCodeCheck.destroy();
    }
    return res.json(newPlanningCodeCheck);
  } catch (err) {
    return res.status(400).json({ error: true, msg: err });
  }
};

// Check Accessibility code

const checkAccessibilityCode = async (req, res) => {
  const { accessibility_code_id, check, building_id, user_id } = req.body;
  try {
    const [newAccessibilityCodeCheck, created] =
      await accessibility_code_check.findOrCreate({
        where: {
          accessibility_code_id: accessibility_code_id,
          check: check,
          building_id: building_id,
          user_id: user_id,
        },
        include: [
          {
            model: accessibility_code,
          },
        ],
      });
    if (!created) {
      await newAccessibilityCodeCheck.destroy();
    }
    return res.json(newAccessibilityCodeCheck);
  } catch (err) {
    return res.status(400).json({ error: true, msg: err });
  }
};

// Check Building code

const checkBuildingCode = async (req, res) => {
  const { building_code_id, check, building_id, user_id } = req.body;
  try {
    const [newBuildingCodeCheck, created] =
      await building_code_check.findOrCreate({
        where: {
          building_code_id: building_code_id,
          check: check,
          building_id: building_id,
          user_id: user_id,
        },
        include: [
          {
            model: building_code,
          },
        ],
      });
    if (!created) {
      await newBuildingCodeCheck.destroy();
    }
    return res.json(newBuildingCodeCheck);
  } catch (err) {
    return res.status(400).json({ error: true, msg: err });
  }
};

// Check Fire code

const checkFireCode = async (req, res) => {
  const { fire_code_id, check, building_id, user_id } = req.body;
  try {
    const [newFireCodeCheck, created] = await fire_code_check.findOrCreate({
      where: {
        fire_code_id: fire_code_id,
        check: check,
        building_id: building_id,
        user_id: user_id,
      },
      include: [
        {
          model: fire_code,
        },
      ],
    });
    if (!created) {
      await newFireCodeCheck.destroy();
    }
    return res.json(newFireCodeCheck);
  } catch (err) {
    return res.status(400).json({ error: true, msg: err });
  }
};

// Get all checked GFA code

const getAllCheckedGfaCode = async (req, res) => {
  try {
    const allCheckedGfaCode = await gfa_code_check.findAll({
      include: [
        {
          model: gfa_code,
        },
      ],
    });
    return res.json(allCheckedGfaCode);
  } catch (err) {
    return res.status(400).json({ error: true, msg: err });
  }
};

// Get all checked Planning code

const getAllCheckedPlanningCode = async (req, res) => {
  try {
    const allCheckedPlanningCode = await planning_code_check.findAll({
      include: [
        {
          model: planning_code,
        },
      ],
    });
    return res.json(allCheckedPlanningCode);
  } catch (err) {
    return res.status(400).json({ error: true, msg: err });
  }
};

// Get all checked Accessibility code

const getAllCheckedAccessibilityCode = async (req, res) => {
  try {
    const allCheckedAccessibilityCode = await accessibility_code_check.findAll({
      include: [
        {
          model: accessibility_code,
        },
      ],
    });
    return res.json(allCheckedAccessibilityCode);
  } catch (err) {
    return res.status(400).json({ error: true, msg: err });
  }
};

// Get all checked Building code

const getAllCheckedBuildingCode = async (req, res) => {
  try {
    const allCheckedBuildingCode = await building_code_check.findAll({
      include: [
        {
          model: building_code,
        },
      ],
    });
    return res.json(allCheckedBuildingCode);
  } catch (err) {
    return res.status(400).json({ error: true, msg: err });
  }
};

// Get all checked Fire code

const getAllCheckedFireCode = async (req, res) => {
  try {
    const allCheckedFireCode = await fire_code_check.findAll({
      include: [
        {
          model: fire_code,
        },
      ],
    });
    return res.json(allCheckedFireCode);
  } catch (err) {
    return res.status(400).json({ error: true, msg: err });
  }
};

module.exports = {
  getAllAuthorities,
  addOneBuilding,
  getAllBuildings,
  checkGfaCode,
  checkPlanningCode,
  checkAccessibilityCode,
  checkBuildingCode,
  checkFireCode,
  getAllCheckedGfaCode,
  getAllCheckedPlanningCode,
  getAllCheckedAccessibilityCode,
  getAllCheckedBuildingCode,
  getAllCheckedFireCode,
};
