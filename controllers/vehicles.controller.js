const Vehicle = require('../models/vehicle.model');
const logger = require('../logs/loggers');
const time = require('../logs/realtime');
const path = require("path");
const Resize = require("./resize");

const {
    CLIENT_IGNORE_SIGPIPE,
} = require("mysql/lib/protocol/constants/client");
const { data } = require('../logs/loggers');
const imagePath = path.join(__dirname, "./images");

const UploadImg = async(req, res, next) => {
    const fileUpload = new Resize(imagePath, path.extname(req.file.originalname));
    if (!req.file) {
        res.status(401).json({ error: "Chưa có ảnh" });
        return res;
    }
    console.log(req.file);
    const filename = await fileUpload.save(req.file.buffer);
    logger.info("image upload: ", [filename]);
    return res.status(200).json({ name: filename });
};

const getEmptyVehicles = (req, res, next) => {
    Vehicle.getStatusEmpty((err, data) => {
        res.json(data)
    });
};

const getVehicleIsRented = (req, res, next) => {
    Vehicle.getStatusRented((err, data) => {
        res.json(data)
    });
    logger.info(data)
};

const getVehicleIsRepairing = (req, res, next) => {
    Vehicle.getStatusRepairing((err, data) => {
        res.json(data)
    });
};

const getAllVehicle = (req, res, next) => {
    Vehicle.all((err, data) => {
        res.json(data)
    });
};

const getVehicle = (req, res) => {
    Vehicle.find(req.params.id, (err, data) => {
        res.json(data)
    });

};

const getSearch = (req, res) => {
    Vehicle.search(req.params.search, (err, data) => {
        res.json(data)
    });
};

const getVehicleByNumb = async (req, res) => {
    Vehicle.getbynumber(req.params.numb, (err, data) => {
        res.json(data)
    }); 
}

const createVehicle = (req, res) => {
    console.log("start create");
    Vehicle.create({
            name: req.body.name,
            license_plate: req.body.license_plate,
            category: req.body.category,
            rent_price: req.body.rent_price,
            manufacture_year: req.body.manufacture_year,
            numb_regist: req.body.numb_regist,
            numb_manage: req.body.numb_manage,
            status: req.body.status,
            color: req.body.color,
            price: req.body.price,
            image: req.body.image,

        },
        (err, data) => {
            res.json(data);
        }
    );
    logger.info(req.body);
};

//update status change when rented or reparing or return vehicle
const updateRentedStatus = async (req, res) => {
    Vehicle.updaterentedstatus(req.params.id, (err,data) => {
        res.json(data);
    });
};
const updateEmptyStatus = async (req, res) => {
    Vehicle.updateEmptystatus(req.params.id, (err,data) => {
        res.json(data);
    });
};
const updateReparingStatus = async (req, res) => {
    Vehicle.updatereparingstatus(req.params.id, (err,data) => {
        res.json(data);
    });
};

const updateVehicle = async(req, res) => {
    // console.log("resq file", req.file);
    // const fileUpload = new Resize(imagePath, path.extname(req.file.originalname));
    // console.log(req.file);
    // const filename = await fileUpload.save(req.file.buffer);
    // logger.info("image upload: ", [filename]);
    Vehicle.update({
            name: req.body.name,
            license_plate: req.body.license_plate,
            category: req.body.category,
            rent_price: req.body.rent_price,
            manufacture_year: req.body.manufacture_year,
            numb_regist: req.body.numb_regist,
            numb_manage: req.body.numb_manage,
            status: req.body.status,
            color: req.body.color,
            price: req.body.price,
            //image: req.body.image,
            id: req.params.id,
        },
        (err, data) => {
            res.json(data);
        }
    );
    logger.info("update Vehicle", [req.body]);
    logger.info("id_vehicle update", [req.params]);
};

const deleteVehicle = (req, res) => {
    Vehicle.destroy(req.params.id, (err, data) => {
        res.json(data);
    });
    logger.info("delete id required", [req.params]);
};

const changeImage = async(req, res) => {
    console.log("resq file", req.file);
    const fileUpload = new Resize(imagePath, path.extname(req.file.originalname));
    console.log(req.file);
    const filename = await fileUpload.save(req.file.buffer);
    logger.info("image upload: ", [filename]);
    Vehicle.setimage({
            image: filename,
            id: req.params.id,
        },
        (err, data) => {
            res.json(data);
        }
    );
    logger.info("id_vehicle change image", [req.params]);
};

const getByNumbRegist = async (req, res) => {
    Vehicle.getbynumbregist(req.params.numb, (err, data) => {
        res.json(data)
    }); 
}

module.exports = {
    getAllVehicle,
    getVehicle,
    getSearch,
    createVehicle,
    updateVehicle,
    changeImage,
    UploadImg,
    deleteVehicle,
    getVehicleByNumb,
    getEmptyVehicles,
    getVehicleIsRented,
    getVehicleIsRepairing,
    updateRentedStatus,
    updateEmptyStatus,
    updateReparingStatus,
    getByNumbRegist,
}