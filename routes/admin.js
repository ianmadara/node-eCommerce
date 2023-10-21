const path = require("path");

const express = require("express");
const productsController = require("../controllers/products");


const router = express.Router();

router.get("/product", productsController.getAddProductPage)
router.post("/product", productsController.getSaveProduct);

module.exports = router;
