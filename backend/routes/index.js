const express = require("express");

const router = express.Router();

const apirouter = require("./api");

router.use("/api", apirouter);

router.get("*", (req, res, next) => {
  res.send("woot!");
});

router.use((err, req, res, next) => {
  res.json({ success: false, message: err });
});

module.exports = router;
