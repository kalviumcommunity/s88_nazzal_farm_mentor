// models/Video.js
const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  description: String,
  uploadedBy: String,
  uploadedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Video', videoSchema);
