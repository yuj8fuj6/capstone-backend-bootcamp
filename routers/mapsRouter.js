const { Router } = require("express");
const controllers = require("../controllers/mapsController");
const router = Router();

// get one planning parameter and planning type
router.get("/planningType", controllers.getOnePlanningType);

router.get("/planningParam", controllers.getOnePlanningParam);

module.exports = router;
