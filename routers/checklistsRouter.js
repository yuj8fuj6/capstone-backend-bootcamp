const { Router } = require("express");
const controllers = require("../controllers/checklistsController");
const router = Router();

// also no auth. Anyone can update anyone's checklists via postman.
router.get("/allAuthorities", controllers.getAllAuthorities);
router.post("/addBuilding", controllers.addOneBuilding);
router.get("/allBuildings/:user_id", controllers.getAllBuildings);
router.post("/checkGfaCode", controllers.checkGfaCode);
router.post("/checkPlanningCode", controllers.checkPlanningCode);
router.post("/checkAccessibilityCode", controllers.checkAccessibilityCode);
router.post("/checkBuildingCode", controllers.checkBuildingCode);
router.post("/checkFireCode", controllers.checkFireCode);
router.get("/getAllCheckedGfa", controllers.getAllCheckedGfaCode);
router.get("/getAllCheckedPlanning", controllers.getAllCheckedPlanningCode);
router.get(
  "/getAllCheckedAccessibility",
  controllers.getAllCheckedAccessibilityCode,
);
router.get("/getAllCheckedBuilding", controllers.getAllCheckedBuildingCode);
router.get("/getAllCheckedFire", controllers.getAllCheckedFireCode);

module.exports = router;
