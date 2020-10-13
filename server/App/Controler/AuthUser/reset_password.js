const { User } = require("../../Models/User.model");
const { errHandler } = require("../../Utils/Errors");

exports.resetPassword = async (req, res) => {
  try {
    let { token, newPassword } = req.body;
    let user = await User.findOne({ resetPasswordToken: token });
    if (!user) return errHandler(5, res);
    if (Date.now() <= parseInt(user.resetPasswordExpires)) {
      user.password = newPassword;
      user.save();
      return res.send({
        status: 200,
        message: "Your password has been changed",
        success: true,
      });
    } else {
      res.send({
        status: 409,
        message: "Token has expired",
      });
    }
  } catch (err) {
    return errHandler(err, res);
  }
};
