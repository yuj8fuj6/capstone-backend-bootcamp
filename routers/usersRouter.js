const { Router } = require("express");
const controllers = require("../controllers/usersController");
const router = Router();

// post or get one user
router.post("/:email", controllers.getOne);

// get all users - non-sensitive details
router.get("/all", controllers.getAll);

// put one user details
router.put("/update/:userId", controllers.updateOne);

module.exports = router;
