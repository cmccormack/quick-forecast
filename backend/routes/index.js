const path = require("path");
const express = require("express");

const router = express.Router();

const apirouter = require("./api");

router.use("/api", apirouter);

// Express Error Handler
router.use((err, req, res, next) => {
  res.json({ success: false, message: err });
});

module.exports = router;
