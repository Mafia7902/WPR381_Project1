const compress = require('compressing');
const fileNaming = require('./fileNaming');

var compressingFunc = (choice, path)=>{
    switch (choice) {
        case "zip":
    
            if (path.valueOf(".")>=0) {
                compress.zip.compressFile(path, fileNaming(path, "zip")).then(console.log("File has been sucessfully compressed to .zip")).catch(console.log("Error!"));
            } else{
                compress.zip.compressDir(path, fileNaming(path, "zip")).then(console.log("File has been sucessfully compressed to .zip")).catch(console.log("Error!"));
            }
            
            break;
    
        case "tar":
    
            if (path.valueOf(".")>=0) {
                compress.tar.compressFile(path, fileNaming(path, "tar")).then(console.log("File has been sucessfully compressed to .tar")).catch(console.log("Error!"));
            } else{
                compress.tar.compressDir(path, fileNaming(path, "tar")).then(console.log("File has been sucessfully compressed to .tar")).catch(console.log("Error!"));
            }
    
            break;
    
        case "tgz":
    
            if (path.valueOf(".")>=0) {
                compress.tgz.compressFile(path, fileNaming(path, "tgz")).then(console.log("File has been sucessfully compressed to .tgz")).catch(console.log("Error!"));
            } else{
                compress.tgz.compressDir(path, fileNaming(path, "tgz")).then(console.log("File has been sucessfully compressed to .tgz")).catch(console.log("Error!"));
            }
    
            break;
    
        default:
            console.log("Error! File extension not supported!")
            break;
    }
}

module.exports = {compressingFunc}