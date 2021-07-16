const comp = require('Compressing');
const naming = require('./compFileNaming')

module.exports = (compFileType, filePath) => {
    switch (compFileType) {
        case 'zip':
            
            if (filePath.indexOf(".")>=0 && filePath.indexOf(".zip")<0) {
                
                comp.zip.compressFile(filePath, naming(filePath, compFileType))
                .then(() =>{console.log("done file: " + filePath);  fs.rmdirSync(filePath, { recursive: true }), console.log("deleted: " + filePath)}).catch(error=>{console.log(error);})
    
            } else {
                comp.zip.compressDir(filePath, naming(filePath, compFileType))
                .then(()=>{console.log("done DIR: "+filePath); fs.rmdirSync(filePath, { recursive: true }), console.log("deleted: " + filePath); console.log();}).catch(error=>{console.log(error)})
            
            }
    
        break;
    
        case 'tar':
        
            if (filePath.indexOf(".")>=0 && filePath.indexOf(".tar")<0) {
                
                comp.tar.compressFile(filePath, naming(filePath, compFileType))
                .then(() =>{console.log("done file: " + filePath);  fs.rmdirSync(filePath, { recursive: true }), console.log("deleted: " + filePath)}).catch(error=>{console.log(error);})
    
            } else {
                comp.tar.compressDir(filePath, naming(filePath, compFileType))
                .then(()=>{console.log("done DIR: "+filePath); fs.rmdirSync(filePath, { recursive: true }), console.log("deleted: " + filePath); console.log();}).catch(error=>{console.log(error)})
            
            }
    
        break;
    
        case 'tgz':
        
            if (filePath.indexOf(".")>=0 && filePath.indexOf(".tgz")<0) {
                
                comp.tgz.compressFile(filePath, naming(filePath, compFileType))
                .then(() =>{console.log("done file: " + filePath);  fs.rmdirSync(filePath, { recursive: true }), console.log("deleted: " + filePath)}).catch(error=>{console.log(error);})
    
            } else {
                comp.tgz.compressDir(filePath, naming(filePath, compFileType))
                .then(()=>{console.log("done DIR: "+filePath); fs.rmdirSync(filePath, { recursive: true }), console.log("deleted: " + filePath); console.log();}).catch(error=>{console.log(error)})
            
            }
    
        break;
    
        default:
    
    
    
            break;
    }
} 