const express = require("express");
const router = express.Router();

const { authUserAction, authPhoneUserAction } = require("../../App/Controler");

/**@@ AUTH APIS FROM EMAIL OR USERNAME @@*/
// check user identity [email, username]
router.post("/check_identity", authUserAction.checkIdentity);
router.post("/signup", authUserAction.userSignUp);
router.post("/login", authUserAction.userLogin);
router.post("/forget_password", authUserAction.forgetPassword);
router.post("/reset_password", authUserAction.resetPassword);

/**@@ AUTH APIS FROM PHONE NUMBER @@*/

router.post("/check_phone", authPhoneUserAction.checkPhone);
router.post("/check_phone_verification", authPhoneUserAction.isValidPhone);
router.post("/login_from_phone", authPhoneUserAction.loginFromPhone);

// check if email or username exsits
router.post("/check_email", authUserAction.checkEmail);
router.post("/check_username", authUserAction.checkUsername);

module.exports = router;
