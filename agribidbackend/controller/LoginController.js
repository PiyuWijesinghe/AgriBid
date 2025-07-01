require("dotenv").config();
const Seller = require("../model/Seller");
const Buyer = require("../model/Buyer");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.createSeller = async (req, res) => {
  try {
    const { role, name, email, password } = req.body;
    if (!role || !name || !email || !password)
      return res.status(400).json({ message: "All fields are required." });

    const existing = await Seller.findOne({ email });
    if (existing)
      return res.status(409).json({ message: "Seller already exists." });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newSeller = new Seller({
      role,
      name,
      email,
      password: hashedPassword,
    });
    await newSeller.save();

    res.status(201).json({
      message: "Seller created successfully.",
      seller: {
        id: newSeller._id,
        name: newSeller.name,
        email: newSeller.email,
        role: newSeller.role,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error." });
  }
};

exports.loginSeller = async (req, res) => {
  try {
    const { role, email, password } = req.body;
    if (!role || !email || !password)
      return res.status(400).json({ message: "All fields are required." });

    const seller = await Seller.findOne({ email });
    if (!seller || seller.role !== role)
      return res.status(401).json({ message: "Invalid credentials." });

    const isMatch = await bcrypt.compare(password, seller.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials." });

    res.status(200).json({
      message: "Seller login successful.",
      seller: {
        id: seller._id,
        name: seller.name,
        email: seller.email,
        role: seller.role,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error." });
  }
};

exports.createBuyer = async (req, res) => {
  try {
    const { role, name, email, password } = req.body;
    if (!role || !name || !email || !password)
      return res.status(400).json({ message: "All fields are required." });

    const existing = await Buyer.findOne({ email });
    if (existing)
      return res.status(409).json({ message: "Buyer already exists." });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newBuyer = new Buyer({ role, name, email, password: hashedPassword });
    await newBuyer.save();

    res.status(201).json({
      message: "Buyer created successfully.",
      token,
      buyer: {
        id: newBuyer._id,
        name: newBuyer.name,
        email: newBuyer.email,
        role: newBuyer.role,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error." });
  }
};

exports.loginBuyer = async (req, res) => {
  try {
    const { role, email, password } = req.body;
    if (!role || !email || !password)
      return res.status(400).json({ message: "All fields are required." });

    const buyer = await Buyer.findOne({ email });
    if (!buyer || buyer.role !== role)
      return res.status(401).json({ message: "Invalid credentials." });

    const isMatch = await bcrypt.compare(password, buyer.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials." });

    res.status(200).json({
      message: "Buyer login successful.",
      token,
      buyer: {
        id: buyer._id,
        name: buyer.name,
        email: buyer.email,
        role: buyer.role,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error." });
  }
};
