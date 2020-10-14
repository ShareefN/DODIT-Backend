const express = require("express");
const router = express.Router();

const { prefrencesAction } = require("../../App/Controler");

// Prefrences Api's
router.post("/create_prefrence", prefrencesAction.createPrefrence);
router.get('/get_prefrences', prefrencesAction.getPrefrences);

module.exports = router;
