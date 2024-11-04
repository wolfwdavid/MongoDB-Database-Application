const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

userSchema.index({ email: 1 }); // Index for quick email lookups

const User = mongoose.model('User', userSchema);
module.exports = User;
