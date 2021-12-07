const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
require("dotenv").config();
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

app.engine("ejs", ejsMate);
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.use("/", require("./routes/usersRoute"));
app.use("/campgrounds", require("./routes/campgroundsRoute"));
app.use("/campgrounds/:id/reviews", require("./routes/reviewsRoute"));

mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (e) => {
    e
      ? console.log(`Error connecting to database /n ${e}`)
      : console.log(`Successfully connected to the database`);
  }
);

const Port = process.env.PORT || "4000";

app.listen(Port, () => {
  console.log(`server lisening on port ${Port}`);
});
