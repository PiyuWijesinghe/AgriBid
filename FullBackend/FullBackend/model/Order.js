const mongoose = require("mongoose");

const orderItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
  priceAtPurchase: {
    type: Number,
    required: true,
  },
});

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    items: [orderItemSchema],
    totalAmount: {
      type: Number,
      required: true,
    },
    billingInfo: {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      email: { type: String, required: true },
      phone: { type: String, required: true },
    },
    deliveryDetails: {
      method: { type: String, enum: ["pickup", "delivery"], default: "pickup" },
      address: { type: String },
      city: { type: String },
      postalCode: { type: String },
      specialInstructions: { type: String },
    },
    paymentDetails: {
      method: {
        type: String,
        enum: ["card", "mobile", "bank", "wallet"],
        required: true,
      },
      card: {
        cardNumber: { type: String },
        expiryDate: { type: String },
        cardName: { type: String },
      },
      mobile: {
        mobileNumber: { type: String },
      },
      bank: {
        bankAccount: { type: String },
      },
    },
    status: {
      type: String,
      enum: [
        "pending",
        "processing",
        "shipped",
        "delivered",
        "cancelled",
        "returned",
      ],
      default: "pending",
    },
    orderDate: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

orderSchema.pre("save", function (next) {
  if (this.deliveryDetails.method === "delivery") {
    if (!this.deliveryDetails.address || !this.deliveryDetails.city) {
      next(
        new Error("Delivery address and city are required for home delivery.")
      );
    }
  }
  next();
});

module.exports = mongoose.model("Order", orderSchema);
