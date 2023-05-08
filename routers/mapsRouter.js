const { Router } = require("express");
const mapsController = require("../controllers/mapsController");
const router = Router();

// get one planning parameter and planning type
router.get("/planningType", mapsController.getOnePlanningType);

router.get("/planningParam", mapsController.getOnePlanningParam);

module.exports = router;
