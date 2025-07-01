require("dotenv").config();
const Seller = require("../model/Seller");
const Buyer = require("../model/Buyer");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET || "your_super_secret_jwt_key";

exports.getUserById = async (req, res) => {
  const { id } = req.params;
  const { role } = req.query;

  try {
    let user;
    if (role === "Seller") {
      user = await Seller.findById(id);
    } else if (role === "Buyer") {
      user = await Buyer.findById(id);
    } else {
      return res.status(400).json({ message: "Invalid role" });
    }

    if (!user) {
      return res.status(404).json({ message: `${role} not found` });
    }

    res.json(user);
  } catch (error) {
    console.error(`Error fetching ${role}:`, error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

exports.updateSeller = async (req, res) => {
  const { id } = req.params;
  const {
    firstName,
    lastName,
    email,
    phone,
    address,
    city,
    district,
    postalCode,
    bio,
  } = req.body;

  try {
    const seller = await Seller.findById(id);
    if (!seller) return res.status(404).json({ message: "Seller not found" });

    seller.firstName = firstName || seller.firstName;
    seller.lastName = lastName || seller.lastName;
    seller.name = `${seller.firstName} ${seller.lastName}`;
    seller.email = email || seller.email;
    seller.phone = phone || seller.phone;
    seller.address = address || seller.address;
    seller.city = city || seller.city;
    seller.district = district || seller.district;
    seller.postalCode = postalCode || seller.postalCode;
    seller.bio = bio || seller.bio;

    await seller.save();

    res.json({
      id: seller._id,
      firstName: seller.firstName,
      lastName: seller.lastName,
      name: seller.name,
      email: seller.email,
      phone: seller.phone,
      address: seller.address,
      city: seller.city,
      district: seller.district,
      postalCode: seller.postalCode,
      bio: seller.bio,
    });
  } catch (error) {
    console.error("Error updating seller:", error);
    res.status(500).json({ message: "Server error" });
  }
};
exports.updateBuyer = async (req, res) => {
  const { id } = req.params;
  const {
    firstName,
    lastName,
    email,
    phone,
    address,
    city,
    district,
    postalCode,
    bio,
  } = req.body;

  try {
    const buyer = await Buyer.findById(id);
    if (!buyer) return res.status(404).json({ message: "Buyer not found" });

    buyer.firstName = firstName || buyer.firstName;
    buyer.lastName = lastName || buyer.lastName;
    buyer.name = `${buyer.firstName} ${buyer.lastName}`;
    buyer.email = email || buyer.email;
    buyer.phone = phone || buyer.phone;
    buyer.address = address || buyer.address;
    buyer.city = city || buyer.city;
    buyer.district = district || buyer.district;
    buyer.postalCode = postalCode || buyer.postalCode;
    buyer.bio = bio || buyer.bio;

    await buyer.save();

    res.json({
      id: buyer._id,
      firstName: buyer.firstName,
      lastName: buyer.lastName,
      name: buyer.name,
      email: buyer.email,
      phone: buyer.phone,
      address: buyer.address,
      city: buyer.city,
      district: buyer.district,
      postalCode: buyer.postalCode,
      bio: buyer.bio,
    });
  } catch (error) {
    console.error("Error updating buyer:", error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.createSeller = async (req, res) => {
  try {
    const { role, name, email, password } = req.body;
    if (!role || !name || !email || !password)
      return res.status(400).json({ message: "All fields are required." });

    const existing = await Seller.findOne({ email });
    if (existing)
      return res
        .status(409)
        .json({ message: "Seller with this email already exists." });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newSeller = new Seller({
      role,
      name,
      email,
      password: hashedPassword,
    });
    await newSeller.save();

    const token = jwt.sign(
      { id: newSeller._id, email: newSeller.email, role: newSeller.role },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(201).json({
      message: "Seller created successfully.",
      token,
      seller: {
        id: newSeller._id,
        name: newSeller.name,
        email: newSeller.email,
        role: newSeller.role,
      },
    });
  } catch (error) {
    console.error(error);
    if (error.code === 11000) {
      return res
        .status(409)
        .json({ message: "An account with this email already exists." });
    }
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

    const token = jwt.sign(
      { id: seller._id, email: seller.email, role: seller.role },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      message: "Seller login successful.",
      token,
      seller: {
        id: seller._id,
        name: seller.name,
        email: seller.email,
        role: seller.role,
      },
    });
  } catch (error) {
    console.error(error);
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
      return res
        .status(409)
        .json({ message: "Buyer with this email already exists." });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newBuyer = new Buyer({ role, name, email, password: hashedPassword });
    await newBuyer.save();

    const token = jwt.sign(
      { id: newBuyer._id, email: newBuyer.email, role: newBuyer.role },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

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
    console.error(error);
    if (error.code === 11000) {
      return res
        .status(409)
        .json({ message: "An account with this email already exists." });
    }
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

    const token = jwt.sign(
      { id: buyer._id, email: buyer.email, role: buyer.role },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

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
    console.error(error);
    res.status(500).json({ message: "Server error." });
  }
};
