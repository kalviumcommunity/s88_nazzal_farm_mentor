const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: String,
  price: Number,
  stock: Number,
  addedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Inventory', inventorySchema);
