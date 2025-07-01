const express = require("express");
const router = express.Router();
const cartController = require("../controller/cartController");

router.get("/", cartController.getCartItems);
router.post("/", cartController.addCartItem);
router.put("/:id", cartController.updateCartItem);
router.delete("/:id", cartController.removeCartItem);
router.put("/save-for-later/:id", cartController.saveForLater);
router.get("/save-for-later/:id", cartController.getSavedItems);
router.put("/move-to-cart/:id", cartController.moveToCart);

module.exports = router;
