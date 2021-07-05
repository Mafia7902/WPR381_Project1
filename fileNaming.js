module.exports = (filePath, fileType)=>{
    var filePathName = filePath.split("\\")

    var oldFileName = filePathName[filePathName.length -1]

    var newFile = oldFileName.split(".")

    var fileName = newFile[0]

    var finalFileName = fileName + "." + fileType

    filePathName[filePathName.length-1] = finalFileName

    var finalPathName = filePathName.join("\\")
    
    return finalPathName
}