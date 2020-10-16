const express = require("express");
const router = express.Router();

const { prefrencesAction, expertiseAction } = require("../../App/Controler");

// Prefrences Api's
router.post("/create_prefrence", prefrencesAction.createPrefrence);
router.get("/get_prefrences", prefrencesAction.getPrefrences);
router.delete("/delete_prefrence/:id", prefrencesAction.deletePrefrence);
router.put("/update_prefrence/:id", prefrencesAction.updatePrefernce);

// Expertise Api's
router.post('/create_expertise', expertiseAction.createExpertise)
router.delete('/delete_expertise/:id', expertiseAction.deleteExpertise)
module.exports = router;
