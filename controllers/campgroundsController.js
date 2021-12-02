const { newCampground } = require("../services/campgroundService");
const index = async (req, res) => {
  res.render("campgrounds/index");
};

const showCampground = async (req, res) => {
  res.render("campgrounds/show");
};

const renderNewForm = (req, res) => {
  res.render("campgrounds/new");
};

const createCampground = async (req, res) => {
  let check = await newCampground(req.body);

  console.log(check);
};

module.exports = { index, showCampground, renderNewForm, createCampground };
