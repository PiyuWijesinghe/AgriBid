const express = require("express");
const router = express.Router();
const orderController = require("../controller/orderController");

router.post("/", orderController.placeOrder);
router.get("/user/:userId", orderController.getOrdersByUser);
router.get("/:orderId", orderController.getOrderById);
router.put("/:orderId/status", orderController.updateOrderStatus);

module.exports = router;
