const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  quantity: String,
  price: Number,
  description: String,
  location: String,
  images: [String],
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Seller",
  },
  status: {
    type: String,
    default: "Active",
  },
});

module.exports = mongoose.model("Product", productSchema);
