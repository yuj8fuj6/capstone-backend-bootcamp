const {
  user,
  authority,
  post_upvote,
  post,
  thread_upvote,
  thread,
} = require("../db/models");

const e = require("express");

// Retrieve all posts

const getAllPosts = async (req, res) => {
  try {
    const posts = await post.findAll({
      include: [
        {
          model: authority,
          attributes: ["name", "acronym", "logo_url"],
        },
        {
          model: user,
          attributes: ["name", "firm", "designation", "photo_url"],
        },
      ],
    });
    return res.json(posts);
  } catch (err) {
    return res.status(400).json({ error: true, msg: err });
  }
};

// Retrieve all threads for one specific post

const getAllThreads = async (req, res) => {
  const { postID } = req.params;
  try {
    const threads = await thread.findAll({
      where: { post_id: postID },
      include: [
        {
          model: user,
          attributes: ["name", "firm", "designation", "photo_url"],
        },
        {
          model: post,
          include: [
            {
              model: authority,
              attributes: ["name", "acronym", "logo_url"],
            },
            {
              model: user,
              attributes: ["name", "firm", "designation", "photo_url"],
            },
          ],
        },
      ],
    });
    return res.json(threads);
  } catch (err) {
    return res.status(400).json({ error: true, msg: err });
  }
};

// Get thread count for each post
const getThreadCount = async (req, res) => {
  const { postID } = req.params;
  try {
    const threadCount = await thread.count({
      where: { post_id: postID },
      include: { model: post },
    });
    return res.json(threadCount);
  } catch (err) {
    return res.status(400).json({ error: true, msg: err });
  }
};

// Retrieve one specific post

const getOnePost = async (req, res) => {
  const { postID } = req.params;
  try {
    const onePost = await post.findOne({
      where: { id: postID },
      include: [
        {
          model: authority,
          attributes: ["name", "acronym", "logo_url"],
        },
        {
          model: user,
          attributes: ["name", "firm", "designation", "photo_url"],
        },
      ],
    });
    return res.json(onePost);
  } catch (err) {
    return res.status(400).json({ error: true, msg: err });
  }
};

// Add one post

const addOnePost = async (req, res) => {
  const userInput = req.body;
  try {
    const createPost = await post.create(userInput);
    const newPost = await post.findOne({
      where: { id: createPost.id },
      include: [
        {
          model: authority,
          attributes: ["name", "acronym", "logo_url"],
        },
        {
          model: user,
          attributes: ["name", "firm", "designation", "photo_url"],
        },
      ],
    });
    return res.json(newPost);
  } catch (err) {
    return res.status(400).json({ error: true, msg: err });
  }
};

// Add one thread

const addOneThread = async (req, res) => {
  const userInput = req.body;
  try {
    const createThread = await thread.create(userInput);
    const newThread = await thread.findOne({
      where: { id: createThread.id },
      include: [
        {
          model: user,
          attributes: ["name", "firm", "designation", "photo_url"],
        },
        {
          model: post,
          include: [
            {
              model: authority,
              attributes: ["name", "acronym", "logo_url"],
            },
            {
              model: user,
              attributes: ["name", "firm", "designation", "photo_url"],
            },
          ],
        },
      ],
    });
    return res.json(newThread);
  } catch (err) {
    return res.status(400).json({ error: true, msg: err });
  }
};

// Delete one post

const deleteOnePost = async (req, res) => {
  const { postID } = req.body;
  try {
    const currentPost = await post.findByPk(postID);
    await currentPost.destroy();
  } catch (err) {
    return res.status(400).json({ error: true, msg: err });
  }
};

// Delete one thread

const deleteOneThread = async (req, res) => {
  const { threadID } = req.body;
  try {
    const currentThread = await thread.findByPk(threadID);
    await currentThread.destroy();
  } catch (err) {
    return res.status(400).json({ error: true, msg: err });
  }
};

// Add or destroy one post vote

const addOnePostVote = async (req, res) => {
  const { upvote, post_id, user_id } = req.body;
  try {
    const [newPostUpvote, created] = await post_upvote.findOrCreate({
      where: { upvote: upvote, post_id: post_id, user_id: user_id },
    });
    if (!created) {
      await newPostUpvote.destroy();
    }
    const voteCount = await post_upvote.count({
      where: { post_id: post_id },
    });
    const currentPost = await post.findByPk(post_id);
    await currentPost.update(
      { upvote: voteCount },
      { where: { post_id: post_id } },
    );
    await currentPost.save();
    return res.json(currentPost);
  } catch (err) {
    return res.status(400).json({ error: true, msg: err });
  }
};

// Add or destroy one thread vote

const addOneThreadVote = async (req, res) => {
  const { upvote, thread_id, user_id } = req.body;
  try {
    const [newThreadUpvote, created] = await thread_upvote.findOrCreate({
      where: { upvote: upvote, thread_id: thread_id, user_id: user_id },
    });
    if (!created) {
      await newThreadUpvote.destroy();
    }
    const voteCount = await thread_upvote.count({
      where: { thread_id: thread_id },
    });
    const currentThread = await thread.findByPk(thread_id);
    await currentThread.update(
      { upvote: voteCount },
      { where: { thread_id: thread_id } },
    );
    await currentThread.save();
    return res.json(currentThread);
  } catch (err) {
    return res.status(400).json({ error: true, msg: err });
  }
};

module.exports = {
  getAllPosts,
  getAllThreads,
  getOnePost,
  addOnePost,
  addOneThread,
  deleteOnePost,
  deleteOneThread,
  addOnePostVote,
  addOneThreadVote,
  getThreadCount,
};
