const mongoose = require("mongoose");

buyerSchema = new mongoose.Schema({
  role: {
    type: String,
    required: true,
    default: "Buyer",
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

const Buyer = new mongoose.model("Buyer", buyerSchema);
module.exports = Buyer;
