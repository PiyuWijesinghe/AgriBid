const mongoose = require("mongoose");

sellerSchema = new mongoose.Schema({
  role: {
    type: String,
    required: true,
    default: "Seller",
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Seller = new mongoose.model("Seller", sellerSchema);
module.exports = Seller;
