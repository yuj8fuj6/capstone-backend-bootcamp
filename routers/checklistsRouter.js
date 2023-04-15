const { Router } = require("express");
const controllers = require("../controllers/checklistsController");
const router = Router();

router.get("/allAuthorities", controllers.getAllAuthorities);
router.post("/addBuilding", controllers.addOneBuilding);

module.exports = router;
