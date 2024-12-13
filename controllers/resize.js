const sharp = require("sharp");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

class Resize {
  constructor(folder) {
    this.folder = folder;
  }
  async save(buffer, ext = "png") {
    const filename = Resize.filename(ext);
    const filepath = this.filepath(filename);
    // console.log("filename", filename);
    // console.log("filepath", filepath);
    try {
      await sharp(buffer)
        .resize(300, 300, {
          // size image 300x300
          fit: sharp.fit.inside,
          withoutEnlargement: true,
        })
        .toFile(filepath);
    } catch (error) {
      console.log(error);
    }
    // console.log("ten file nek: ", filename);
    return filename;
  }
  static filename(ext) {
    // random file name
    return `${uuidv4()}.${ext}`;
  }
  filepath(filename) {
    const imagePath = path.join(__dirname, "../images");
    return path.resolve(`${imagePath}/${filename}`);
  }
}
module.exports = Resize;
