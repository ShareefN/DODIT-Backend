const express = require("express");
const router = express.Router();

const { isUserAuth } = require("../../../App/Middlewares");
const { upload } = require("../../../App/Utils/Upload");
const {
  isImageInappropriate,
} = require("../../../App/Utils/Image_Recognition");
// const { expertiseAction } = require("../../../App/Controler");

// Post Api's
//example api api/posts/create_post
router.post("/create_post", (req, res) => {
  let res1 = isImageInappropriate(
    "0049fe1c-cca4-48ce-9622-eaa8295e3324.png",
    res
  );
  res.send(res1);
});

module.exports = router;
