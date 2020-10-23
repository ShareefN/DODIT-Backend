const express = require("express");
const router = express.Router();

const { isUserAuth } = require("../../../App/Middlewares");
const { upload } = require("../../../App/Utils/Upload");

// const { expertiseAction } = require("../../../App/Controler");

// Post Api's
router.post("/create_post", isUserAuth, upload.single("image"), (req, res) => {
  let test = req.file.location;
  res.send({ ...req.body, test });
});

module.exports = router;
