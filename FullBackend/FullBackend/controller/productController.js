const Product = require("../model/Product");

exports.createProduct = async (req, res) => {
  try {
    const { name, category, quantity, price, description, location, userId } =
      req.body;

    const images = req.files.map((file) => file.path); // Cloudinary URLs

    const newProduct = new Product({
      name,
      category,
      quantity,
      price,
      description,
      location,
      userId,
      images,
    });

    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ message: "Failed to create product." });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, category, quantity, price, description, location, userId } =
      req.body;

    const images =
      req.files && req.files.length > 0
        ? req.files.map((file) => file.path)
        : req.body.images || [];

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      {
        name,
        category,
        quantity,
        price,
        description,
        location,
        userId,
        images,
      },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found." });
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ message: "Failed to update product." });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found." });
    }

    res.status(200).json({ message: "Product deleted successfully." });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ message: "Failed to delete product." });
  }
};
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching all products:", error);
    res.status(500).json({ message: "Failed to fetch products." });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const { userId } = req.query;

    if (!userId) {
      return res.status(400).json({ message: "userId is required" });
    }

    const products = await Product.find({ userId });

    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Failed to fetch products." });
  }
};

exports.updateProductStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!status || !["Active", "Pending", "Sold"].includes(status)) {
      return res.status(400).json({
        message:
          "Invalid status provided. Status must be Active, Pending, or Sold.",
      });
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { status: status },
      { new: true, runValidators: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found." });
    }

    res.json(updatedProduct);
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(400).json({ message: "Invalid Product ID format." });
    }
    res.status(500).json({
      message: "Server error updating product status",
      error: error.message,
    });
  }
};
