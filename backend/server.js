const path = require("path");
const express = require("express");
require("dotenv").config({ path: path.resolve(__dirname, "./configs/.env") });

const app = express();
app.set("port", process.env.PORT || 3000);

const routes = require("./routes");

app.use(routes);

const server = app.listen(app.get("port"), err => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  const { port, address } = server.address();
  console.log(`Server started, listening on ${address}:${port}`);
});
