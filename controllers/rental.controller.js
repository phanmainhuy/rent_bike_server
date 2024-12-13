const Rental = require("../models/rental.model");
const logger = require("../logs/loggers");
const time = require("../logs/realtime");
const path = require("path");
const Resize = require("./resize");
const imagePath = path.join(__dirname, "./images");

const getAllRental = (req, res, next) => {
  Rental.all((err, data) => {
    res.json(data);
  });
};
const getSearchRental = (req, res) => {
 
  Rental.search(req.params.search, (err, data) => {
    // console.log('search: ', req.params.search)
    res.json(data);
  });
};
const createRental = (req, res) => {
  Rental.create({
    id_user: req.body.id_user,
    id_vehicle: req.body.id_vehicle,
    rentdate: req.body.rentdate,
    returndate: req.body.returndate,
    total: req.body.total,
  },
  (err,data) => {
    res.json(data)
  }
  );
}

const deleteRental = (req, res) => {
  Rental.delete(req.params.id, (err, data) => {
    res.json(data);
  });
};

const returnVehicle = (req, res) => {
  Rental.returnvehicle(req.params.id, (err, data) => {
    res.json(data);
  }) 
}


module.exports = {
  getAllRental,
  getSearchRental,
  createRental,
  deleteRental,
  returnVehicle,

};
