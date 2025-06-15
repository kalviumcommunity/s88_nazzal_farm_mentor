// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

// ------------------------
// ⚙️ Middleware
// ------------------------
app.use(cors());
app.use(express.json());

// ------------------------
// 📁 MongoDB Models
// ------------------------
const Video = require('./models/Video');
const Inventory = require('./models/Inventory');
const User = require('./models/User');
const Plant = require('./models/Plant');

// ------------------------
// 🌐 MongoDB Connection
// ------------------------
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
    });

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    
    // Start server only after DB connection
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('❌ MongoDB connection error:', error.message);
    // Exit process with failure
    process.exit(1);
  }
};

// Connect to MongoDB
connectDB();

// Handle MongoDB errors after initial connection
mongoose.connection.on('error', err => {
  console.error('MongoDB error after initial connection:', err);
});

mongoose.connection.on('disconnected', () => {
  console.warn('🔌 MongoDB disconnected');
});

// ------------------------
// 🧪 Test Route with DB Check
// ------------------------
app.get('/test', async (req, res) => {
  try {
    // Check DB connection
    if (mongoose.connection.readyState !== 1) {
      throw new Error('Database not connected');
    }
    res.json({ 
      status: 'success',
      message: 'API is working 🚀',
      dbStatus: 'connected'
    });
  } catch (error) {
    res.status(500).json({ 
      status: 'error',
      message: error.message,
      dbStatus: 'disconnected'
    });
  }
});

// ------------------------
// 📥 POST Endpoints with Validation
// ------------------------

// Upload a new video
app.post('/videos', async (req, res) => {
  try {
    const { title, url, description, uploadedBy } = req.body;
    
    // Basic validation
    if (!title || !url) {
      return res.status(400).json({ error: 'Title and URL are required fields.' });
    }

    const newVideo = new Video({ title, url, description, uploadedBy });
    await newVideo.save();
    console.log(`📽️ New video uploaded with ID: ${newVideo._id}`);
    res.status(201).json({ 
      status: 'success',
      message: 'Video uploaded successfully!', 
      video: newVideo 
    });
  } catch (err) {
    console.error('Error uploading video:', err);
    res.status(500).json({ 
      status: 'error',
      error: 'Failed to upload video.',
      details: err.message 
    });
  }
});

// Add new inventory item
app.post('/inventory', async (req, res) => {
  try {
    const { name, category, price, stock } = req.body;
    
    // Basic validation
    if (!name || !category || price === undefined) {
      return res.status(400).json({ error: 'Name, category, and price are required fields.' });
    }

    const newItem = new Inventory({ name, category, price, stock });
    await newItem.save();
    console.log(`📦 New inventory item added with ID: ${newItem._id}`);
    res.status(201).json({ 
      status: 'success',
      message: 'Inventory item added!', 
      item: newItem 
    });
  } catch (err) {
    console.error('Error adding inventory item:', err);
    res.status(500).json({ 
      status: 'error',
      error: 'Failed to add inventory item.',
      details: err.message 
    });
  }
});

// ------------------------
// 🔍 GET Endpoints with Pagination
// ------------------------

// Get all videos with pagination
app.get('/videos', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const videos = await Video.find()
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });

    const total = await Video.countDocuments();

    res.json({
      status: 'success',
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      totalVideos: total,
      videos
    });
  } catch (err) {
    console.error('Error fetching videos:', err);
    res.status(500).json({ 
      status: 'error',
      error: 'Failed to fetch videos.',
      details: err.message 
    });
  }
});

// Get all inventory items with pagination and filtering
app.get('/inventory', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const category = req.query.category;

    let query = {};
    if (category) {
      query.category = category;
    }

    const items = await Inventory.find(query)
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });

    const total = await Inventory.countDocuments(query);

    res.json({
      status: 'success',
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      totalItems: total,
      items
    });
  } catch (err) {
    console.error('Error fetching inventory:', err);
    res.status(500).json({ 
      status: 'error',
      error: 'Failed to fetch inventory items.',
      details: err.message 
    });
  }
});

// ------------------------
// ✏️ PUT Endpoints
// ------------------------

// Update a video
app.put('/videos/:id', async (req, res) => {
  try {
    const updatedVideo = await Video.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedVideo) {
      return res.status(404).json({ error: 'Video not found' });
    }
    res.json({ message: 'Video updated successfully', video: updatedVideo });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update video.' });
  }
});

// Update an inventory item
app.put('/inventory/:id', async (req, res) => {
  try {
    const updatedItem = await Inventory.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedItem) {
      return res.status(404).json({ error: 'Inventory item not found' });
    }
    res.json({ message: 'Inventory item updated', item: updatedItem });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update inventory item.' });
  }
});

// ------------------------
// 🗑️ DELETE Endpoints
// ------------------------

// Delete a video
app.delete('/videos/:id', async (req, res) => {
  try {
    const deletedVideo = await Video.findByIdAndDelete(req.params.id);
    if (!deletedVideo) {
      return res.status(404).json({ error: 'Video not found' });
    }
    res.json({ message: 'Video deleted successfully', video: deletedVideo });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete video.' });
  }
});

// Delete an inventory item
app.delete('/inventory/:id', async (req, res) => {
  try {
    const deletedItem = await Inventory.findByIdAndDelete(req.params.id);
    if (!deletedItem) {
      return res.status(404).json({ error: 'Inventory item not found' });
    }
    res.json({ message: 'Inventory item deleted', item: deletedItem });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete inventory item.' });
  }
});
