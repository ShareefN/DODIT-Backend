const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { v4: uuid } = require("uuid");

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, index: true, unique: true },
    phone: { type: String, index: true, required: true },
    password: { type: String, required: true },
    username: { type: String },
    uuid: { type: String, index: { unique: true }, default: uuid },
  },
  {
    strict: true,
    timestamps: true,
  }
);

// * hash password before saving
UserSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    let salt = bcrypt.genSaltSync(5);
    let hashedPassword = bcrypt.hashSync(this.password, salt);
    this.password = hashedPassword;
  }
  next();
});

// * use compare password method
UserSchema.methods.comparePassword = async function (password) {
  let isEqual = await bcrypt.compareSync(password, this.password);
  return isEqual;
};

exports.User = mongoose.model("User", UserSchema);
