const { Router } = require("express");
const controllers = require("../controllers/checklistsController");
const router = Router();

router.get("/allAuthorities", controllers.getAllAuthorities);
router.post("/addBuilding", controllers.addOneBuilding);
router.get("/allBuildings/:user_id", controllers.getAllBuildings);
router.post("/checkGfaCode", controllers.checkGfaCode);
router.post("/checkPlanningCode", controllers.checkPlanningCode);
router.post("/checkAccessibilityCode", controllers.checkAccessibilityCode);
router.post("/checkBuildingCode", controllers.checkBuildingCode);
router.post("/checkFireCode", controllers.checkFireCode);

module.exports = router;
