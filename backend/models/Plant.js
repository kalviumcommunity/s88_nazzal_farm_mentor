// models/Plant.js
const mongoose = require('mongoose');

const plantSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: [true, 'Plant name is required'] 
  },
  type: { 
    type: String, 
    required: [true, 'Plant type is required'],
    enum: ['Vegetable', 'Herb', 'Flower', 'Fruit', 'Other']
  },
  plantedDate: { 
    type: Date, 
    required: [true, 'Planting date is required'] 
  },
  nextWatering: { 
    type: Date, 
    required: [true, 'Next watering date is required'] 
  },
  health: { 
    type: String, 
    required: true,
    enum: ['Excellent', 'Good', 'Needs Attention']
  },
  progress: { 
    type: Number, 
    required: true,
    min: 0,
    max: 100
  },
  image: { 
    type: String,
    required: [true, 'Plant image URL is required']
  },
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',
    required: [true, 'User ID is required']
  },
  careNotes: { 
    type: String,
    default: ''
  }
}, { 
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Add virtual for days until next watering
plantSchema.virtual('daysUntilWatering').get(function() {
  const now = new Date();
  const nextWater = new Date(this.nextWatering);
  const diffTime = Math.abs(nextWater - now);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
});

// Add index for better query performance
plantSchema.index({ userId: 1, type: 1 });

module.exports = mongoose.model('Plant', plantSchema);
