// routes/videoRoutes.js
const express = require('express');
const router = express.Router();
const Video = require('../models/Video');

// @route   GET /videos
// @desc    Fetch all videos
router.get('/', async (req, res) => {
  try {
    const videos = await Video.find();
    res.json(videos);
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
});

// @route   GET /videos/:id
// @desc    Get video by ID
router.get('/:id', async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) {
      return res.status(404).json({ error: 'Video not found' });
    }
    res.json(video);
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
});

// @route   GET /videos/category/:category
// @desc    Get videos by category
router.get('/category/:category', async (req, res) => {
  try {
    const videos = await Video.find({ category: req.params.category });
    res.json(videos);
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
});

// @route   GET /videos/search/:query
// @desc    Search videos by title
router.get('/search/:query', async (req, res) => {
  try {
    const videos = await Video.find({
      title: { $regex: req.params.query, $options: 'i' }
    });
    res.json(videos);
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
});

module.exports = router;
