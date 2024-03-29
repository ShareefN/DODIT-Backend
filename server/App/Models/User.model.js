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
    settings: { type: Array },
    hits: { type: Number, default: 0 },
    dateOfBirth: { type: String },
    gender: { type: String },
    prefrences: { type: mongoose.Schema.Types.ObjectId, ref: "Prefrences" },
    expertise: { type: mongoose.Schema.Types.ObjectId, ref: "Experties" },
    postsId: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
    voteId: { type: mongoose.Schema.Types.ObjectId, ref: "Vote" },
    locations: [
      {
        longitude: { type: Number },
        latitude: { type: Number },
        type: { type: Number },
      },
    ],
  },
  {
    strict: true,
    timestamps: true,
  }
);

// hash password before save docs
UserSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    let salt = bcrypt.genSaltSync(10);
    let hashedPassword = bcrypt.hashSync(this.password, salt);
    this.password = hashedPassword;
  }
  next();
});

// * use compare password method
UserSchema.methods.comparePassword = function (password) {
  let isEqual = bcrypt.compareSync(password, this.password);
  return isEqual; //true or false
};

exports.User = mongoose.model("User", UserSchema);
