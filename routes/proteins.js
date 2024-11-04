const express = require('express');
const Protein = require('../models/Protein'); // 
const router = express.Router();

// GET all proteins
router.get('/', async (req, res) => {
  try {
    const proteins = await Protein.find();
    res.json(proteins);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST create protein
router.post('/', async (req, res) => {
  const protein = new Protein(req.body); // Create a new Protein instance
  try {
    const savedProtein = await protein.save();
    res.status(201).json(savedProtein); // Respond with the created protein
  } catch (error) {
    res.status(400).json({ message: error.message }); // Handle validation errors
  }
});

// Other routes: PATCH, DELETE can be added here...

// Export the router
module.exports = router;
