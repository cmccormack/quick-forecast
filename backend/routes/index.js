const path = require("path");
const express = require("express");

const router = express.Router();

router.use((req, res, next) => {
  console.log("DEBUG: ", req.originalUrl, req.path, req.params, req.query);
  next();
});

router.use("/api", require("./api"));

// Express Error Handler
router.use((err, req, res, next) => {
  res.json({ success: false, message: err });
});

module.exports = router;
