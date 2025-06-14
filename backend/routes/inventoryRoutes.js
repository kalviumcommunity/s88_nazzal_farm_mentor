// routes/inventoryRoutes.js
const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');

router.get('/', inventoryController.getAllItems);
router.post('/', inventoryController.createItem);
router.put('/:id', inventoryController.updateItem);

module.exports = router;
