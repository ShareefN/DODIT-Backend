const { checkIdentity } = require("./check_identity");
const { userSignUp } = require("./signup");
const { userLogin } = require("./user_login");
const { forgetPassword } = require("./forget_password");
const { resetPassword } = require("./reset_password");

module.exports = {
  checkIdentity,
  userSignUp,
  userLogin,
  forgetPassword,
  resetPassword,
};
