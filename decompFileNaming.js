module.exports = (filePath)=>{
    var filePathName = filePath.split("\\")

    filePathName.pop()

    var finalPathName = filePathName.join("\\")

    console.log(finalPathName);
    
    return finalPathName
}

//var filePath = "C:\\Users\\janvw\\Desktop\\CompressFile.zip"

