const express = require("express");
const router = express.Router();
const { getMessagesByRoom } = require("../controllers/message.controller");

router.get("/:room", getMessagesByRoom);

module.exports = router;
