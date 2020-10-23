const express = require("express");
const router = express.Router();

const { expertiseAction } = require("../../../App/Controler");

// Expertise Api's
router.post("/create_expertise", expertiseAction.createExpertise);
router.get("/get_expertise", expertiseAction.getExpertise);
router.put("/update_expertise/:id", expertiseAction.updateExpertise);

module.exports = router;
