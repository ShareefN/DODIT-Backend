const { User } = require("../../Models/User.model");
const { errHandler } = require("../../Utils/Errors");
const { generateJWT } = require("../../Utils/Token");

exports.userLogin = async (req, res) => {
  try {
    let { identity, password } = req.body;
    let user = await User.findOne({
      $or: [{ email: identity }, { username: identity }],
    });
    if (!user) return errHandler(1, res);
    let match = user.comparePassword(password);
    if (match) {
      let token = generateJWT({ _id: user._id });
      return res.send({
        token,
        success: true,
        user,
      });
    }
    return errHandler(3, res);
  } catch (err) {
    return errHandler(err, res);
  }
};
