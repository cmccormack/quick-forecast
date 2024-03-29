const router = require("express").Router();
const got = require("got");

router.get("/", (req, res, next) => {
  res.json({ success: true, message: `server running!` });
});

router.get("/forecast/:latlong", async (req, res, next) => {
  const loc = req.params.latlong;
  const { APIHOST: host, APIKEY: key } = process.env;
  const url = `${host}/${key}/${loc}`;
  const json = await got(url, { json: true });
  const response = Object.assign({ success: true }, json.body);
  res.json(response);
});

module.exports = router;
