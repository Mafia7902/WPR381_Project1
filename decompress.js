const compressing = require("compressing");
const fileNaming = require("./fileNaming");

//var choice = "zip";

//var path = "C:\\decompressed.zip";

//var type = path.substring(path.length - 3, path.length);
//console.log(type);

var deCompressingFunc = (choice, path) => {
  switch (choice) {
    case "zip":
      //var type = path.substring(".", 3);
      compressing.zip
        .uncompress(path, fileNaming(path))
        .then(console.log("the zip has been decompressed"))
        .catch(console.log("This file has not been decompressed"));

      //save the un zip file under your c drive but it shows error in console
      break;

    case "tar":
      compressing.tar
        .uncompress(path, fileNaming(path))
        .then(console.log("The file has been decompressed"))
        .catch(console.log("This file has not been decompressed"));
      break;

    case "tgz":
      compressing.tgz
        .uncompress(path, fileNaming(path))
        .then(console.log("The file has been decompressed"))
        .catch(console.log("This file has not been decompressed"));
      break;

    default:
      console.log("IDK");
  }
};

module.exports = deCompressingFunc;
