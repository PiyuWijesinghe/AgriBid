require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const LoginRouters = require("./router/LoginRouters");
const productRoutes = require("./router/productRoutes");
const cartRoutes = require("./router/cartRoutes");
const orderRoutes = require("./router/orderRoutes");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Database Connected.");
  })
  .catch((error) => {
    console.log("Database connection error.");
  });

app.use("/AgriBid/Login", LoginRouters);
app.use("/AgriBid/Products", productRoutes);
app.use("/AgriBid/Cart", cartRoutes);
app.use("/AgriBid/Order", orderRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
