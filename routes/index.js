const users = require("./user.routes");
const vehicle = require("./vehicle.routes");
const rental = require("./rental.routes");
const prefix = "/api";
module.exports = function (app) {
  app.use(`${prefix}/users`, users);
  app.use(`${prefix}/vehicle`, vehicle);
  app.use(`${prefix}/rentals`, rental);
};
