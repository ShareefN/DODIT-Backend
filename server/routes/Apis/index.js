const express = require("express")();
const Prefrences = require("./Prefrences");
const Expertise = require("./Expertise");
const Posts = require("./Posts");

express.use("/prefrences", Prefrences);
express.use("/expertise", Expertise);
express.use("/posts", Posts);

module.exports = express;
