const express = require("express");
const router = express.Router();
const accesoriosController = require("../controllers/accesorios.controller.js");

router.get("/", accesoriosController.find);
module.exports = router;
