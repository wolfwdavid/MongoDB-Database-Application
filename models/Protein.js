const mongoose = require('mongoose');

const proteinSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Name of the protein
  source: { type: String, required: true }, // Source of the protein (e.g., chicken, beans)
  quantity: { type: Number, required: true }, // Quantity in grams
  benefits: { type: String, required: true }, // Benefits of the protein
});

// Export the Protein model
const Protein = mongoose.model('Protein', proteinSchema);
module.exports = Protein;
