const Campground = require("../models/campgroudModel");
const { translateError } = require("./mongo_helper");

const newCampground = async ({ title, price, description, location }) => {
  try {
    let campground = new Campground({
      title,
      price,
      description,
      location,
    });

    if (await campground.save()) {
      return [true, campground];
    }
  } catch (error) {
    return [false, translateError(err)];
  }
};

const getAllCampgrounds = async () => await Campground.find();

const getCampgroundById = async (id) => await Campground.findById(id);

const deleteCampgroundById = async (id) =>
  await Campground.findByIdAndDelete(id);

module.exports = {
  newCampground,
  getAllCampgrounds,
  getCampgroundById,
  deleteCampgroundById,
};
