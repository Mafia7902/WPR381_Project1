const comp = require('Compressing');
const naming = require('./compFileNaming')

module.exports = (compFileType, filePath) => {
    switch (compFileType) {
        case 'zip':
            
            if (filePath.indexOf(".")>=0) {
                
                comp.zip.compressFile(filePath, naming(filePath, compFileType))
                .then(console.log("File has been compressed"))
                .catch(error=>{console.log("An Error has occurred, please ensure you have entered the correct path: "+filePath);})
    
            } else {
                comp.zip.compressDir(filePath, naming(filePath, compFileType))
                .then(()=>{console.log("File has been compressed");})
                .catch(error=>{console.log("something")})
            }
    
        break;
    
        case 'tar':
        
            if (filePath.indexOf(".")>=0) {
                
                comp.tar.compressFile(filePath, naming(filePath, compFileType))
                .then(console.log("File has been compressed"))
                .catch(console.log("An Error has occurred, please ensure you have entered the correct path: "+filePath));
    
            } else {
                comp.tar.compressDir(filePath, naming(filePath, compFileType))
                .then(console.log("File has been compressed"))
                .catch(console.log("An Error has occurred, please ensure you have entered the correct path: "+filePath));
            }
    
        break;
    
        case 'tgz':
        
            if (filePath.indexOf(".")>=0) {
                
                comp.tgz.compressFile(filePath, naming(filePath, compFileType))
                .then(console.log("File has been compressed"))
                .catch(console.log("An Error has occurred, please ensure you have entered the correct path: "+filePath));
    
            } else {
                comp.tgz.compressDir(filePath, naming(filePath, compFileType))
                .then(console.log("File has been compressed"))
                .catch(console.log("An Error has occurred, please ensure you have entered the correct path: "+filePath));
            }
    
        break;
    
        default:
    
    
    
            break;
    }
} 