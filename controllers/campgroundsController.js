const {
  newCampground,
  getAllCampgrounds,
  getCampgroundById,
  deleteCampgroundById,
} = require("../services/campgroundService");
const index = async (req, res) => {
  const campgrounds = await getAllCampgrounds();
  res.render("campgrounds/index", { campgrounds });
};

const showCampground = async (req, res) => {
  const campground = await getCampgroundById(req.params.id);
  res.render("campgrounds/show", { campground });
};

const renderNewForm = (req, res) => {
  res.render("campgrounds/new");
};

const createCampground = async (req, res) => {
  console.log(req.body);
  let check = await newCampground(req.body);

  console.log(check);
};

const renderEditForm = async (req, res) => {
  const campground = await getCampgroundById(req.params.id);

  res.render("campgrounds/edit", { campground });
};

const deleteCampground = async (req, res) => {
  await deleteCampgroundById(req.params.id);
};
module.exports = {
  index,
  showCampground,
  renderNewForm,
  createCampground,
  renderEditForm,
  deleteCampground,
};
