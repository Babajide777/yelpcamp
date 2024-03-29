const mongoose = require("mongoose");
const { Schema } = mongoose;

const CampgroundSchema = new Schema(
  {
    title: String,
    price: Number,
    image: String,
    description: String,
    location: String,
  },
  { timestamps: true }
);

const Campground = mongoose.model("Campground", CampgroundSchema);
module.exports = Campground;
