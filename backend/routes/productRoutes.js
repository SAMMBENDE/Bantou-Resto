const express = require("express");
const router = express.Router();

const { getAllProducts, getProductById } = require('../controller/productControllers');

//GET ALL PRODUCTS FROM DB
//GET /api/products
//ACCESS PUBLIC
router.get("/", getAllProducts);

//GET ALL PRODUCTS FROM BY id FROM DB
//GET /api/products/:id
//ACCESS PUBLIC
router.get("/:id", getProductById);

module.exports = router;