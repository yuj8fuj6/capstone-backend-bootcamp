const { user } = require("../db/models");

const e = require("express");

// create or get one user

const getOne = async (req, res) => {
  // can consider validating the the email is in email format via Regex or a validation library
  const { email } = req.params;

  try {
    const currentUser = await user.findOrCreate({ where: { email: email } });
    return res.json(currentUser);
  } catch (err) {
    return res.status(400).json({ error: true, msg: err });
  }
};

// get all users - not sensitive details

const getAll = async (req, res) => {
  try {
    const allUser = await user.findAll({
      attributes: ["name", "firm", "designation", "photo_url"],
    });
    return res.json(allUser);
  } catch (err) {
    return res.status(400).json({ error: true, msg: err });
  }
};

// update user's info

const updateOne = async (req, res) => {
  const { userId } = req.params;
  const {
    name,
    dob,
    gender,
    citizenship,
    residential_status,
    contact_no,
    email,
    professional_no,
    firm,
    designation,
    block_no,
    street_name,
    building_name,
    unit_no,
    postal_code,
    photo_url,
  } = req.body;

  try {
    const currentUser = await user.findByPk(userId);
    // what is there is no such user because it doesn't exist or the userId was invalid?
    // Instead of leaving error handling up to your catch block, I would manually handle the error instead.
    // By right the catch block should be a 500, internal server error. Anything really unexpected basically.
    // Not finding a user is rather a possibly expected behavior and I would handle it by returning 400.
    await currentUser.update({
      name: name,
      dob: dob,
      gender: gender,
      citizenship: citizenship,
      residential_status: residential_status,
      contact_no: contact_no,
      email: email,
      professional_no: professional_no,
      firm: firm,
      designation: designation,
      block_no: block_no,
      street_name: street_name,
      building_name: building_name,
      unit_no: unit_no,
      postal_code: postal_code,
      photo_url: photo_url,
      role: "user",
    });
    return res.json(currentUser);
  } catch (err) {
    return res.status(400).json({ error: true, msg: err });
  }
};

module.exports = {
  getOne,
  getAll,
  updateOne,
};
