const { userPhoneSignUp } = require("./signupFromPhone");
const { checkPhone } = require("./check_phone");
const { isValidPhone } = require("./phone_verification_check");

module.exports = { userPhoneSignUp, checkPhone, isValidPhone };
