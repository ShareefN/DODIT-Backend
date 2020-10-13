const express = require("express");
const router = express.Router();

const { authUserAction } = require("../../App/Controler");
// check user identity [email, username]
router.post("/check_identity", authUserAction.checkIdentity);
router.post("/signup", authUserAction.userSignUp);
router.post("/login", authUserAction.userLogin);
router.post("/forget_password", authUserAction.forgetPassword);
router.post("/reset_password", authUserAction.resetPassword);

module.exports = router;
