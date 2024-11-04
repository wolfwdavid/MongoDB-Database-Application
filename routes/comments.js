const express = require('express');
const Comment = require('../models/Comment');
const router = express.Router();

// GET all comments
router.get('/', async (req, res) => {
  const comments = await Comment.find().populate('postId userId');
  res.json(comments);
});

// POST create comment
router.post('/', async (req, res) => {
  const comment = new Comment(req.body);
  try {
    const savedComment = await comment.save();
    res.status(201).json(savedComment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Other routes: PATCH, DELETE...
