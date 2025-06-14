// controllers/plantController.js
const Plant = require('../models/Plant');

exports.getAllPlants = async (req, res) => {
  try {
    const plants = await Plant.find();
    res.json(plants);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch plants' });
  }
};

exports.createPlant = async (req, res) => {
  try {
    const newPlant = new Plant(req.body);
    const savedPlant = await newPlant.save();
    res.status(201).json(savedPlant);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create plant' });
  }
};

exports.updatePlant = async (req, res) => {
  try {
    const updated = await Plant.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update plant' });
  }
};
