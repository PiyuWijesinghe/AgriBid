const Order = require("../model/Order");
const Cart = require("../model/CartItem");
const Product = require("../model/Product");

exports.placeOrder = async (req, res) => {
  const {
    userId,
    orderItems,
    totalAmount,
    paymentMethod,
    billingInfo,
    deliveryDetails,
    cardDetails,
    mobileDetails,
    bankDetails,
    specialInstructions,
  } = req.body;

  try {
    if (!userId || !orderItems || orderItems.length === 0 || !totalAmount) {
      return res
        .status(400)
        .json({ message: "Missing required order information." });
    }

    const itemsForOrder = await Promise.all(
      orderItems.map(async (item) => {
        const product = await Product.findById(item.productId);
        if (!product) {
          throw new Error(`Product with ID ${item.productId} not found.`);
        }
        if (product.stock < item.quantity) {
          throw new Error(
            `Insufficient stock for product: ${product.name}. Available: ${product.stock}, Requested: ${item.quantity}`
          );
        }

        product.stock -= item.quantity;
        await product.save();

        return {
          productId: item.productId,
          quantity: item.quantity,
          priceAtPurchase: item.priceAtPurchase || product.price,
        };
      })
    );

    let paymentInfo = { method: paymentMethod };
    if (paymentMethod === "card") {
      paymentInfo.card = {
        cardNumber: cardDetails.cardNumber
          ? `**** **** **** ${cardDetails.cardNumber.slice(-4)}`
          : undefined,
        expiryDate: cardDetails.expiryDate,
        cardName: cardDetails.cardName,
      };
    } else if (paymentMethod === "mobile") {
      paymentInfo.mobile = {
        mobileNumber: mobileDetails.mobileNumber,
      };
    } else if (paymentMethod === "bank") {
      paymentInfo.bank = {
        bankAccount: bankDetails.bankAccount,
      };
    }

    const newOrder = new Order({
      userId,
      items: itemsForOrder,
      totalAmount,
      billingInfo,
      deliveryDetails,
      paymentDetails: paymentInfo,
      status: "pending",
      specialInstructions: deliveryDetails.specialInstructions,
    });

    const savedOrder = await newOrder.save();

    await Cart.deleteMany({ userId });

    res.status(201).json({
      message: "Order placed successfully",
      orderId: savedOrder._id,
      order: savedOrder,
    });
  } catch (error) {
    console.error("Error placing order:", error);
    if (
      error.message.includes("Product not found") ||
      error.message.includes("Insufficient stock")
    ) {
      return res.status(400).json({ message: error.message });
    }
    res
      .status(500)
      .json({ message: "Failed to place order. Please try again." });
  }
};

exports.getOrdersByUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const orders = await Order.find({ userId })
      .sort({ orderDate: -1 })
      .populate("items.productId");
    res.json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ message: "Failed to fetch orders" });
  }
};

exports.getOrderById = async (req, res) => {
  const { orderId } = req.params;
  try {
    const order = await Order.findById(orderId).populate("items.productId");
    if (!order) return res.status(404).json({ message: "Order not found" });
    res.json(order);
  } catch (error) {
    console.error("Error getting order:", error);
    res.status(500).json({ message: "Failed to get order" });
  }
};

exports.updateOrderStatus = async (req, res) => {
  const { orderId } = req.params;
  const { status } = req.body;

  try {
    const allowedStatuses = [
      "pending",
      "processing",
      "shipped",
      "delivered",
      "cancelled",
      "returned",
    ];
    if (!allowedStatuses.includes(status)) {
      return res
        .status(400)
        .json({ message: "Invalid order status provided." });
    }

    const updatedOrder = await Order.findByIdAndUpdate(
      orderId,
      { status },
      { new: true, runValidators: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({ message: "Order not found." });
    }

    res.json({
      message: "Order status updated successfully",
      order: updatedOrder,
    });
  } catch (error) {
    console.error("Error updating order status:", error);
    res.status(500).json({ message: "Failed to update order status" });
  }
};
