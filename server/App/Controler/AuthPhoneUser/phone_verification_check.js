const { User } = require("../../Models/User.model");
const { errHandler } = require("../../Utils/Errors");
const { checkVerificationCode } = require("../../Utils/Helpers");

exports.isValidPhone = async (req, res) => {
  let { phone, code } = req.body;
  if (!phone || !code) return errHandler(4, res);
  try {
    return checkVerificationCode(phone, code, res);
  } catch (err) {
    console.log(err);
    return errHandler(err, res);
  }
};
