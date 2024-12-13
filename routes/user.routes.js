const express = require("express");
const router = express.Router();
const upload = require("../upload");

const {
  getAllUser,
  getUser,
  getLogin,
  getSearch,
  getSearchName,
  createUser,
  updateUser,
  deleteUser,
  changeAvatar,
  UploadImg,
  createUserNoImage,
  getUserByMobile,
} = require("../controllers/users.controller");
router.route("/").get(getAllUser).post(createUserNoImage);
router.route("/:id").get(getUser).patch(updateUser);
router.route("/login/:email/:password").get(getLogin);
router.route("/searchname/:nam").get(getSearchName);
router.route("/search/:search").get(getSearch);
router.route("/setavatar/:id").patch(upload.single("image"), changeAvatar);
router.route("/delete/:id").patch(deleteUser);
router.route("/upload/").post(upload.single("image"), UploadImg);
router.route("/create/").post(upload.single("image"), createUser);
router.route("/mobile/:mobile").get(getUserByMobile);

module.exports = router;