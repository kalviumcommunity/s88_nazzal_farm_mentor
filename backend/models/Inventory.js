// models/Inventory.js
const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
  itemName: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  linkedVideoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Video' },
}, { timestamps: true });

module.exports = mongoose.model('Inventory', inventorySchema);
