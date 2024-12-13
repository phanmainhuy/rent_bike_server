const User = require("../models/user.model");
const logger = require("../logs/loggers");
const time = require("../logs/realtime");
const path = require("path");
const Resize = require("./resize");
// const {
//   CLIENT_IGNORE_SIGPIPE,
// } = require("mysql/lib/protocol/constants/client");
// const {
//     CLIENT_IGNORE_SIGPIPE,
// } = require("mysql/lib/protocol/constants/client");
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

const getAllUser = (req, res, next) => {
    User.all((err, data) => {
        res.json(data);
    });
    // log.info(filename);
};
const getUser = (req, res) => {
    User.find(req.params.id, (err, data) => {
        res.json(data);
    });
};
const getSearch = (req, res) => {
    User.search(req.params.search, (err, data) => {
        res.json(data);
    });
};

const getSearchName = (req, res) => {
    User.searchname(req.params.nam, (err, data) => {
        res.json(data);
    });
};

const getLogin = (req, res) => {
    User.login(req.params.email, req.params.password, (err, data) => {
        res.json(data);
    });
};

const createUser = async (req, res) => {
  console.log("resq file", req.file);
  const fileUpload = new Resize(imagePath, path.extname(req.file.originalname));
  console.log(req.file);
  const filename = await fileUpload.save(req.file.buffer);
  logger.info("image upload: ", [filename]);
  User.create(
    {
      name: req.body.name,
      mobile: req.body.mobile,
      email: req.body.email,
      password: req.body.password,
      birthday: req.body.birthday,
      gender: req.body.gender,
      address: req.body.address,
      cmnd: req.body.cmnd,
      national: req.body.national,
      avatar: filename,
    },
    (err, data) => {
      res.json(data);
    }
  );
  logger.info(req.body);
};

const createUserNoImage = (req, res) => {
  User.create(
    {
      name: req.body.name,
      mobile: req.body.mobile,
      email: req.body.email,
      password: req.body.password,
      birthday: req.body.birthday,
      gender: req.body.gender,
      address: req.body.address,
      cmnd: req.body.cmnd,
      national: req.body.national,
      avatar: req.body.avatar,
    },
    (err, data) => {
      res.json(data);
    }
  );
  logger.info(req.body);
};

const updateUser = async (req, res) => {
  // console.log("resq file", req.file);
  // const fileUpload = new Resize(imagePath, path.extname(req.file.originalname));
  // console.log(req.file);
  // const filename = await fileUpload.save(req.file.buffer);
  // logger.info("image upload: ", [filename]);
  User.update(
    {
      name: req.body.name,
      mobile: req.body.mobile,
      email: req.body.email,
      password: req.body.password,
      birthday: req.body.birthday,
      gender: req.body.gender,
      address: req.body.address,
      cmnd: req.body.cmnd,
      national: req.body.national,
      // avatar: filename,
      id: req.params.id,
    },
    (err, data) => {
      res.json(data);
    }
  );
  logger.info("updateUser ", [req.body]);
  logger.info("id_user update", [req.params]);
};
const deleteUser = (req, res) => {
    User.destroy(req.params.id, (err, data) => {
        res.json(data);
    });
    logger.info("delete id required", [req.params]);
};

const changeAvatar = async(req, res) => {
    console.log("resq file", req.file);
    const fileUpload = new Resize(imagePath, path.extname(req.file.originalname));
    console.log(req.file);
    const filename = await fileUpload.save(req.file.buffer);
    logger.info("image upload: ", [filename]);
    User.setavatar({
            avatar: filename,
            id: req.params.id,
        },
        (err, data) => {
            res.json(data);
        }
    );
    logger.info("id_user change avatar", [req.params]);
};

const getUserByMobile = async (req, res) => {
  User.findbymobile(req.params.mobile, (err, data) => {
    res.json(data);
});
}

module.exports = {
  getAllUser,
  getUser,
  getSearch,
  getSearchName,
  getLogin,
  createUser,
  updateUser,
  deleteUser,
  changeAvatar,
  UploadImg,
  createUserNoImage,
  getUserByMobile,
};

