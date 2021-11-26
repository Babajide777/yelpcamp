const router = require("express").Router();
const {
  register,
  renderRegister,
  login,
  renderLogin,
  logout,
} = require("../controllers/usersController");

router.route("/register").get(renderRegister).post();
router.route("/login").get(renderLogin).post();

router.get("/logout", logout);
module.exports = router;
