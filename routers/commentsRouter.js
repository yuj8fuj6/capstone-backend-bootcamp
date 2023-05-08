const { Router } = require("express");
const controllers = require("../controllers/commentsController");
const router = Router();

// comments should also be behind auth, not everyone should be able to make comments.
// I can easily spam comments via postman like this, even without being registered.
// there are hacking tools to scrape websites for routes, based on the REST pattern. They can find all your common endpoints within a minute or so.

// get all posts - non-sensitive details
router.get("/allPosts", controllers.getAllPosts);
router.get("/:postID", controllers.getOnePost);
router.get("/:postID/allThreads", controllers.getAllThreads);
router.post("/addPost", controllers.addOnePost);
router.post("/addThread", controllers.addOneThread);
router.delete("/deletePost", controllers.deleteOnePost);
router.delete("/deleteThread", controllers.deleteOneThread);
router.post("/addPostVote", controllers.addOnePostVote);
router.post("/addThreadVote", controllers.addOneThreadVote);
router.get("/:postID/count", controllers.getThreadCount);

module.exports = router;
