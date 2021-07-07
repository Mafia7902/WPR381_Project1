const comp = require("./Compress")
const RemFile = require("./RemoveFile")
const fs = require('fs');

module.exports = (FileType, testFolder)=>{
    var files = fileDive(testFolder)
    files.forEach(openFile => {
        var oldDir = testFolder.split("\\")
        oldDir.push(openFile)
        var newDir = oldDir.join('\\')
        var deepDiveDir = fileDive(newDir)
        
        deepDiveDir.forEach(cake =>{
            var oldCake = newDir.split("\\")
            oldCake.push(cake)
            var newCake = oldCake.join("\\")
            comp(FileType,newCake)
            RemFile(newCake)
        })
        setTimeout(() => {
            comp(FileType,newDir)
            console.log(newDir);
            
        }, 3000);
        setTimeout(() => {
            RemFile(newDir)
        }, 4000);
    });
}


function fileDive(DIR){
    var arra = []
    fs.readdirSync(DIR).forEach(file => {
        arra.push(file)
        //console.log(file);
    });
    return arra
}