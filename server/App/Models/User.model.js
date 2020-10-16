const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema(
  {
    email: { type: String },
    phone: { type: String },
    username: { type: String },
    password: { type: String },
    resetPasswordToken: { type: String },
    resetPasswordExpires: { type: String },
    status: { type: String, deafult: "active" },
    isVerified: { type: Boolean, deafult: false },
    settings: { type: Array },
    hits: { type: Number, default: 0 },
    dateOfBirth: { type: String },
    gender: { type: String },
    prefrences: { type: Array, default: [] },
    expertise: { type: Array, default: [] },
    avrageTimeToVote: { type: Number, default: 0 }
  },
  {
    strict: true,
    timestamps: true
  }
);

// hash password before save docs
UserSchema.pre("save", async function(next) {
  if (this.isModified("password")) {
    let salt = bcrypt.genSaltSync(10);
    let hashedPassword = bcrypt.hashSync(this.password, salt);
    this.password = hashedPassword;
  }
  next();
});

// * use compare password method
UserSchema.methods.comparePassword = function(password) {
  let isEqual = bcrypt.compareSync(password, this.password);
  return isEqual; //true or false
};

exports.User = mongoose.model("User", UserSchema);
