const { Router } = require("express");
const controllers = require("../controllers/commentsController");
const router = Router();

// get all posts - non-sensitive details
router.get("/allPosts", controllers.getAllPosts);
router.get("/:postID", controllers.getOnePost);
router.get("/:postID/allThreads", controllers.getAllThreads);
router.post("/addPost", controllers.addOnePost);
router.post("/addThread", controllers.addOneThread);
router.delete("/deletePost", controllers.deleteOnePost);
router.delete("/deleteThread", controllers.deleteOnePost);
router.post("/addPostVote", controllers.addOnePostVote);
router.post("/addOneThreadVote", controllers.addOneThreadVote);
router.get("/:postID/count", controllers.getThreadCount);

module.exports = router;
