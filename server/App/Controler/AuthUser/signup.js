const { User } = require("../../Models/User.model");
const { errHandler } = require("../../Utils/Errors");
const { generateJWT } = require("../../Utils/Token");
exports.userSignUp = async (req, res) => {
  try {
    let { email, username } = req.body;
    let user = await User.findOne({
      $or: [{ email }, { username }],
    });
    if (user) return errHandler(2, res); // if user is already exist!
    let newUser = new User({ ...req.body });
    let { _id } = await newUser.save();
    let token = generateJWT({ _id });
    return res.send({
      success: true,
      data: { _id, email, username, token },
    });
  } catch (err) {
    console.log(err);
    return errHandler(err, res);
  }
};
