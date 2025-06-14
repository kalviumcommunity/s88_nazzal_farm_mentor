// routes/plantRoutes.js
const express = require('express');
const router = express.Router();
const plantController = require('../controllers/plantController');

router.get('/', plantController.getAllPlants);
router.post('/', plantController.createPlant);
router.put('/:id', plantController.updatePlant);

module.exports = router;
