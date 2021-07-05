var compressing = require('compressing');
var choice = "";
var poes = "C:\\decompressed.zip";
var type = poes.substring(poes.length-3,poes.length);
console.log(type);
 switch (choice){
   case "zip":
     var type = poes.substring(".", 3);
     compressing.zip.uncompress('C:\\decompressed.zip', 'C:\\decompressed.zip')
     .then(console.log("the file has been decompressed"))
     .catch(console.log("This file has not been decompressed"));
  break;   
 case "tar":
 compressing.tar.uncompress('C:\\decompressed.tar', 'C:\\decompressed.zip')
 .then(uncompressDone)
 .catch(handleError);
 break;

 case "tgz":

 break;

 default:
 console.log("IDK");


}

