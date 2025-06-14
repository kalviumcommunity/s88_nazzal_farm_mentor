// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ------------------------
// 📁 MongoDB Models
// ------------------------
const Video = require('./models/Video');
const Inventory = require('./models/Inventory');

// ------------------------
// 🌐 MongoDB Connection
// ------------------------
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log('✅ MongoDB connected');
  app.listen(process.env.PORT, () => {
    console.log(`🚀 Server running on port ${process.env.PORT}`);
  });
})
.catch((err) => console.error('❌ MongoDB connection error:', err));

// ------------------------
// 🧪 Test Route
// ------------------------
app.get('/test', (req, res) => res.send('API is working 🚀'));


// ------------------------
// 📜 GET Endpoints
// ------------------------

// Get all videos
app.get('/videos', async (req, res) => {
  try {
    const videos = await Video.find();
    res.json(videos);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch videos.' });
  }
});

// Get a specific video by ID
app.get('/videos/:id', async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) {
      return res.status(404).json({ error: 'Video not found' });
    }
    res.json(video);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch video.' });
  }
});

// Get all inventory items
app.get('/inventory', async (req, res) => {
  try {
    const items = await Inventory.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch inventory items.' });
  }
});

// Get a specific inventory item by ID
app.get('/inventory/:id', async (req, res) => {
  try {
    const item = await Inventory.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ error: 'Inventory item not found' });
    }
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch inventory item.' });
  }
});
// ------------------------
// 📥 POST Endpoints
// ------------------------

// Upload a new video
app.post('/videos', async (req, res) => {
  try {
    const { title, url, description, category, thumbnail, duration } = req.body;
    
    // Validate required fields
    if (!title || !url || !description || !category) {
      return res.status(400).json({ 
        error: 'Missing required fields',
        required: ['title', 'url', 'description', 'category']
      });
    }

    // Validate category
    const validCategories = ['Crops', 'Livestock', 'Equipment', 'General'];
    if (!validCategories.includes(category)) {
      return res.status(400).json({ 
        error: 'Invalid category',
        validCategories
      });
    }

    const newVideo = new Video({
      title,
      url,
      description,
      category,
      thumbnail,
      duration,
      uploadDate: new Date()
    });

    await newVideo.save();
    console.log(`📽️ New video uploaded with ID: ${newVideo._id}`);
    res.status(201).json({ message: 'Video uploaded successfully!', video: newVideo });
  } catch (err) {
    console.error('Error uploading video:', err);
    res.status(500).json({ 
      error: 'Failed to upload video.',
      details: err.message 
    });
  }
});

// Add new inventory item
app.post('/inventory', async (req, res) => {
  try {
    const { name, category, price, stock } = req.body;
    const newItem = new Inventory({ name, category, price, stock });
    await newItem.save();
    console.log(`📦 New inventory item added with ID: ${newItem._id}`);
    res.status(201).json({ message: 'Inventory item added!', item: newItem });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add inventory item.' });
  }
});
