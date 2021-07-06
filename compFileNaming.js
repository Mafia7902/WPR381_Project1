function nameCreator(oldFilePath, compressFileType) {
    var oldFilePathArray = oldFilePath.split('\\')

    var fileName = oldFilePathArray[oldFilePathArray.length-1].split('.')

    var newFileName = fileName[0] + "." + compressFileType

    oldFilePathArray[oldFilePathArray.length-1] = newFileName

    var newFilePath = oldFilePathArray.join("\\")

    return newFilePath
}


module.exports = nameCreator