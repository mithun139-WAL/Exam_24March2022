const express = require('express');
const router = express.Router();
const productsController = require('../controllers/ecommerce');
router.get('/', productsController.getProducts);
router.post('/', productsController.createProducts);
router.put('/:id', productsController.editProducts);
router.delete('/:id', productsController.deleteProductWithId);

module.exports = router;
