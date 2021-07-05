var compressing = require("compressing");
var choice = "";

var path = "C:\\decompressed.zip";

var type = path.substring(path.length - 3, path.length);
console.log(type);

switch (choice) {
  case "zip":
    //var type = path.substring(".", 3);
    compressing.zip
      .uncompress("C:\\decompressed.zip", "C:\\decompressed.zip")
      .then(console.log("the file has been decompressed"))
      .catch(console.log("This file has not been decompressed"));
    break;

  case "tar":
    compressing.tar
      .uncompress("C:\\decompressed.tar", "C:\\decompressed.tar")
      .then(console.log("The file has been decompressed"))
      .catch(console.log("This file has not been decompressed"));
    break;

  case "tgz":
    compressing.tgz
      .uncompress("C:\\decompressed.tgz", "C:\\decompressed.tgz")
      .then(console.log("The file has been decompressed"))
      .catch(console.log("This file has not been decompressed"));
    break;

  default:
    console.log("IDK");
}
