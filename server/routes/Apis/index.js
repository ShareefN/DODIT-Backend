const express = require("express");
const router = express.Router();

const { prefrencesAction, expertiseAction } = require("../../App/Controler");

// Prefrences Api's
router.post("/create_prefrence", prefrencesAction.createPrefrence);
router.get("/get_prefrences", prefrencesAction.getPrefrences);
router.put("/update_prefrence/:id", prefrencesAction.updatePrefernce);

// Expertise Api's
router.post("/create_expertise", expertiseAction.createExpertise);
router.get("/get_expertise", expertiseAction.getExpertise);
router.put("/update_expertise/:id", expertiseAction.updateExpertise);

module.exports = router;
