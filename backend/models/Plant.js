// models/Plant.js
const mongoose = require('mongoose');

const plantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  careNotes: { type: String, required: true },
  createdBy: { type: String }, // Optional: link to farmer/user
}, { timestamps: true });

module.exports = mongoose.model('Plant', plantSchema);
