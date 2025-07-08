const express = require('express');
const router = express.Router();
const pembayaranController = require('../controllers/pembayaranController');

router.get('/', pembayaranController.getAll);
router.get('/:id', pembayaranController.getById);
router.post('/', pembayaranController.create);
router.put('/:id', pembayaranController.update);
router.delete('/:id', pembayaranController.delete);

module.exports = router;
