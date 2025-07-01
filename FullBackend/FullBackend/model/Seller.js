const mongoose = require("mongoose");

const sellerSchema = new mongoose.Schema({
  role: {
    type: String,
    required: true,
    default: "Seller",
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  district: {
    type: String,
  },
  postalCode: {
    type: String,
  },
  bio: {
    type: String,
  },
  avatar: {
    type: String,
    default: "👤",
  },
  joinDate: {
    type: Date,
    default: Date.now,
  },
  verified: {
    type: Boolean,
    default: false,
  },
});

const Seller = mongoose.model("Seller", sellerSchema);
module.exports = Seller;
