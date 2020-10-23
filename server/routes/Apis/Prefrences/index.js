const express = require("express");
const router = express.Router();

const { prefrencesAction } = require("../../../App/Controler");

// Prefrences Api's
//example api api/prefrences/create_prefrence
router.post("/create_prefrence", prefrencesAction.createPrefrence);
router.get("/get_prefrences", prefrencesAction.getPrefrences);
router.put("/update_prefrence/:id", prefrencesAction.updatePrefernce);

module.exports = router;
