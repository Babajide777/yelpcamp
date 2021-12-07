const router = require("express").Router();
const {
  index,
  showCampground,
  renderNewForm,
  createCampground,
  renderEditForm,
  deleteCampground,
} = require("../controllers/campgroundsController");
router.route("/").get(index).post(createCampground);

router.get("/new", renderNewForm);

router.route("/:id").get(showCampground).delete(deleteCampground);

router.get("/:id/edit", renderEditForm);

module.exports = router;
