const router = require('express').Router();

const { register , login , forgotpassword , resetpassword , registerStaff, getData } = require("../controllers/auth");
 
//bellow routes map the controllers
router.route("/register").post(register); // call the auth in controllers

router.route("/login").post(login);

router.route("/forgotpassword").post(forgotpassword);

router.route("/passwordreset/:resetToken").put(resetpassword);

router.route("/registerStaff").post(registerStaff);

router.route("/get").get(getData);

module.exports = router;