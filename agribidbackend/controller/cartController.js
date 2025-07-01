const Cart = require("../model/CartItem");
const Product = require("../model/Product");

const getUserFromHeaders = (req) => {
  const userId = req.header("x-user-id");
  const role = req.header("x-user-role");
  return { userId, role };
};

exports.getCartItems = async (req, res) => {
  try {
    const { userId, role } = getUserFromHeaders(req);
    if (!userId || !role) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const cartItems = await Cart.find({
      userId,
      role,
      savedForLater: false,
    }).populate({
      path: "productId",
      populate: {
        path: "userId",
        model: "Seller",
        select: "name",
      },
    });
    res.json(cartItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.addCartItem = async (req, res) => {
  try {
    const { userId, role } = getUserFromHeaders(req);
    if (!userId || !role)
      return res.status(401).json({ message: "Unauthorized" });
    const { productId, quantity } = req.body;
    let item = await Cart.findOne({
      userId,
      role,
      productId,
      savedForLater: false,
    });
    if (item) {
      item.quantity += quantity;
    } else {
      item = new Cart({
        userId,
        role,
        productId,
        quantity,
        savedForLater: false,
      });
    }
    await item.save();
    res.status(201).json(item);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

exports.updateCartItem = async (req, res) => {
  try {
    const { userId, role } = getUserFromHeaders(req);
    if (!userId || !role)
      return res.status(401).json({ message: "Unauthorized" });
    const { id } = req.params;
    const { quantity } = req.body;
    const item = await Cart.findOne({
      _id: id,
      userId,
      role,
      savedForLater: false,
    });
    if (!item) return res.status(404).json({ message: "Not found" });
    if (quantity <= 0) {
      await Cart.deleteOne({ _id: id });
      return res.json({ message: "Removed" });
    }
    item.quantity = quantity;
    await item.save();
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.removeCartItem = async (req, res) => {
  try {
    const { userId, role } = getUserFromHeaders(req);
    if (!userId || !role)
      return res.status(401).json({ message: "Unauthorized" });
    const { id } = req.params;
    await Cart.deleteOne({ _id: id, userId, role });
    res.json({ message: "Removed" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.saveForLater = async (req, res) => {
  try {
    const { userId, role } = getUserFromHeaders(req);
    if (!userId || !role)
      return res.status(401).json({ message: "Unauthorized" });
    const { id } = req.params;
    const item = await Cart.findOne({
      _id: id,
      userId,
      role,
      savedForLater: false,
    });
    if (!item) return res.status(404).json({ message: "Not found" });
    item.savedForLater = true;
    await item.save();
    res.json({ message: "Saved for later", item });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.moveToCart = async (req, res) => {
  try {
    const { userId, role } = getUserFromHeaders(req);
    if (!userId || !role)
      return res.status(401).json({ message: "Unauthorized" });
    const { id } = req.params;
    const item = await Cart.findOne({
      _id: id,
      userId,
      role,
      savedForLater: true,
    });
    if (!item)
      return res.status(404).json({
        message: "Cart item not found or not in 'saved for later' list.",
      });

    item.savedForLater = false;
    await item.save();
    res.json({ message: "Item moved to cart successfully", item });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getSavedItems = async (req, res) => {
  try {
    const { userId, role: userRole } = getUserFromHeaders(req); // Changed for consistency
    if (!userId || !userRole) {
      return res
        .status(400)
        .json({ message: "User ID and Role are required." });
    }

    const savedItems = await Cart.find({
      userId: userId,
      role: userRole,
      savedForLater: true,
    })
      .populate({
        path: "productId",
        populate: {
          path: "userId",
          model: "Seller",
          select: "name",
        },
      })
      .exec();

    const formattedSavedItems = savedItems
      .map((item) => {
        const product = item.productId;
        if (!product) {
          console.warn(`Product not found for saved item ID: ${item._id}`);
          return null;
        }

        const price = parseFloat(product.price) || 0;

        return {
          _id: item._id,
          savedForLater: item.savedForLater,
          productDetails: {
            name: product.name || "Unnamed Product",
            price: price,
            sellerName: product.userId ? product.userId.name : "Unknown Seller", // Access populated seller name
            images:
              product.images && product.images.length > 0
                ? product.images[0]
                : "📦",
          },
        };
      })
      .filter((item) => item !== null);

    res.status(200).json(formattedSavedItems);
  } catch (error) {
    console.error("Error in getSavedItems:", error);
    res.status(500).json({
      message: "Failed to fetch saved items due to a server error.",
      error: error.message,
    });
  }
};
