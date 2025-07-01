const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    refPath: "role",
  },
  role: { type: String, enum: ["Seller", "Buyer"], required: true },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Product",
  },
  quantity: { type: Number, required: true, min: 1 },
  savedForLater: { type: Boolean, default: false },
});

const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;
