const compressing = require("compressing");
const fileNaming = require("./decompFileNaming");

module.exports = (path) => {

  var type = path.substring(path.length - 3, path.length);
  switch (type) {
    case "zip":
      compressing.zip
        .uncompress(path, fileNaming(path))
        .then(()=>{console.log("The file has been decompressed");})
        .catch(error=>{console.log("Decompression failed, please ensure the file path is correct: " + path)})
      break;

    case "tar":
      compressing.tar
        .uncompress(path, fileNaming(path))
        .then(()=>{console.log("The file has been decompressed");})
        .catch(error=>{console.log("Decompression failed, please ensure the file path is correct: " + path)})
      break;

    case "tgz":
      compressing.tgz
        .uncompress(path, fileNaming(path))
        .then(()=>{console.log("The file has been decompressed");})
        .catch(error=>{console.log("Decompression failed, please ensure the file path is correct: " + path)})
      break;

    default:
      console.log("IDK");
  }
};
