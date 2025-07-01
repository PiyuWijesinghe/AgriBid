const express = require("express");
const router = express.Router();
const productController = require("../controller/productController");
const upload = require("../utils/multer");

router.post("/", upload.array("images"), productController.createProduct);
router.get("/", productController.getProducts);
router.get("/all", productController.getAllProducts);
router.patch("/:id/status", productController.updateProductStatus);
router.put("/:id", upload.array("images"), productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
