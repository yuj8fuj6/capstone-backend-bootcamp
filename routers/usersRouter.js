const { Router } = require("express");
const userController = require("../controllers/usersController");
const router = Router();

// no auth on the user routes is quite vulnerable in regards to security. I could just spam the endpoints with emails until I get matches, and then receive all user info easily. I would also know what email the user is signed up with then, and can possibly find the login PW as well via brute forcing it.

// post or get one user
router.post("/:email", userController.getOne);

// get all users - non-sensitive details
router.get("/all", userController.getAll);

// put one user details
router.put("/update/:userId", userController.updateOne);

module.exports = router;
