const mongoose = require("mongoose");

const buyerSchema = new mongoose.Schema({
  role: {
    type: String,
    required: true,
    default: "Buyer",
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

const Buyer = mongoose.model("Buyer", buyerSchema);
module.exports = Buyer;
