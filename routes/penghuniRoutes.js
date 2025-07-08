const express = require('express');
const router = express.Router();
const penghuniController = require('../controllers/penghuniController');

router.get('/', penghuniController.getAll);
router.get('/:id', penghuniController.getById);
router.post('/', penghuniController.create);
router.put('/:id', penghuniController.update);
router.delete('/:id', penghuniController.delete);

module.exports = router;
