require("dotenv").config();

var express = require("express");
var app = express();
var bodyParser = require("body-parser");
const routes = require("./routes");
const connectingDB = require("./config/connect");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use("/images", express.static("images"));

const boot = async () => {
  try {
    await connectingDB();
    app.listen(process.env.CAST_PORT, function () {
      console.log(`Node app is running on port ${process.env.CAST_PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};
routes(app);
boot();
module.exports = app;
