const express = require('express');
const router = express.Router();
const upload = require("../upload");
const {
    getAllVehicle,
    getSearch,
    getVehicle,
    createVehicle,
    updateVehicle,
    changeImage,
    UploadImg,
    deleteVehicle,
    getEmptyVehicles,
    getVehicleIsRented,
    getVehicleIsRepairing,
    getVehicleByNumb,
    updateRentedStatus,
    updateEmptyStatus,
    updateReparingStatus,
    getByNumbRegist,
} = require('../controllers/vehicles.controller');

router.route('/').get(getAllVehicle).post(upload.single("image"), createVehicle);
router.route('/create/').post(createVehicle);
router.route('/search/:search').get(getSearch);
router.route("/setimage/:id").patch(upload.single("image"), changeImage);
router.route("/upload/").post(upload.single("image"), UploadImg);
router.route("/delete/:id").patch(deleteVehicle);
router.route("/get/:id").get(getVehicle).patch(updateVehicle);
router.route("/empty/").get(getEmptyVehicles);
router.route("/rented/").get(getVehicleIsRented);
router.route("/repairing/").get(getVehicleIsRepairing);
router.route("/number/:numb").get(getVehicleByNumb);
router.route("/rented/:id").patch(updateRentedStatus);
router.route("/empty/:id").patch(updateEmptyStatus);
router.route("/reparing/:id").patch(updateReparingStatus);
router.route("/getbynumbregist/:numb").get(getByNumbRegist);

module.exports = router;