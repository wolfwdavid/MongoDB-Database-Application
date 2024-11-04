const express = require('express');
const Post = require('../models/Post');
const router = express.Router();

// GET all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().populate('userId'); 
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message }); 
  }
});

// POST create post
router.post('/', async (req, res) => {
  const post = new Post(req.body); // 
  try {
    const savedPost = await post.save();
    res.status(201).json(savedPost); // 
  } catch (error) {
    res.status(400).json({ message: error.message }); // >-<
  }
});



// Export the router
module.exports = router; //
