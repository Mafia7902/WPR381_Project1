module.exports = (filePath)=>{
    var filePathName = filePath.split("\\")

    var oldFileName = filePathName[filePathName.length -1]
    
    var newFile = oldFileName.split(".")
    
    var fileName = newFile[0]
    
    var finalFileName = fileName
    
    filePathName[filePathName.length-1] = finalFileName
    
    var finalPathName = filePathName.join("\\")
    
    return finalPathName//why not make this a single slash
}

//var filePath = "C:\\Users\\janvw\\Desktop\\CompressFile.zip"

