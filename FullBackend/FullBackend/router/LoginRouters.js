const express = require("express");
const router = express.Router();
const LoginController = require("../controller/LoginController");

router.post("/createSeller", LoginController.createSeller);
router.post("/createBuyer", LoginController.createBuyer);
router.get("/seller/:id", LoginController.getUserById);
router.put("/seller/:id", LoginController.updateSeller);
router.put("/buyer/:id", LoginController.updateBuyer);
router.post("/loginSeller", LoginController.loginSeller);
router.post("/loginBuyer", LoginController.loginBuyer);

module.exports = router;
