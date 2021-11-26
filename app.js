const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.use("/");

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
