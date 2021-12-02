const router = require("express").Router();
const {
  index,
  showCampground,
  renderNewForm,
  createCampground,
} = require("../controllers/campgroundsController");
router.route("/").get(index).post(createCampground);

router.get("/new", renderNewForm);

router.route("/:id").get(showCampground);

module.exports = router;
