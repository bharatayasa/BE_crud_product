const express = require('express');
const router = express.Router();

const serverController = require('../controller/server');
const orderController = require('../controller/orderController');
const productController = require('../controller/productController');
const userController = require('../controller/userControler');

router.get('/', serverController.server);

router.get('/order', orderController.getAllOrder);
router.get('/order/:id', orderController.getOrderById);
router.post('/order', orderController.addOrder);
router.put('/order/:id', orderController.editOrder);
router.delete('/order/:id', orderController.deleteOrder);

router.get('/product', productController.getAllProduct);
router.get('/product/:id', productController.getProductById);
router.post('/product', productController.addProduct);
router.put('/product/:id', productController.updateProduct);
router.delete('/product/:id', productController.deleteProduct);

router.get('/user', userController.getAllUser);
router.get('/user/:id', userController.getUserById);
router.post('/user', userController.addUser);
router.put('/user/:id', userController.updateUser);
router.delete('/user/:id', userController.deleteUser);

module.exports = router
