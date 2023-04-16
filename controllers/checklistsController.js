const {
  authority,
  user,
  building,
  model_building,
  gfa_code,
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
          },
        });
        return res.json(modelBuilding);
      }
    }
  } catch (err) {
    return res.status(400).json({ error: true, msg: err });
  }
};

module.exports = {
  getAllAuthorities,
  addOneBuilding,
};
