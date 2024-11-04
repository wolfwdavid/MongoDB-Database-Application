const express = require('express');
const Comment = require('../models/Comment'); //  correct? =\
const router = express.Router();

// GET all comments
router.get('/', async (req, res) => {
  try {
    const comments = await Comment.find().populate('postId userId'); // 
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message }); // 
  }
});

// POST create comment
router.post('/', async (req, res) => {
  const comment = new Comment(req.body); // 
  try {
    const savedComment = await comment.save();
    res.status(201).json(savedComment); // 
  } catch (error) {
    res.status(400).json({ message: error.message }); // How does ths work noted
  }
});

// O

// Export the router
module.exports = router; 
