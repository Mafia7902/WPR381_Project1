const extract = require('extract-zip');
const path = require('path');
const fs = require('fs');
//input test path below
const usersource = "C:\\Users\\clift\\Desktop\\testExtraction\\SourceWithZip";

//kindly note that this has only been tested for zip files we are not sure how it would work for other extensions
  

var zippedFiles = [];//this is to store the different foldernames(fname)
const extractZip = async (source, target)=> {//function that unzips
    try {
      await extract(source, { dir: target });
      console.log("Extraction complete");
    } catch (err) {
      console.log("There was an error unzipping", err);
    }
  }
  const unzipFiles = async (dirPath)=> {
    const files = fs.readdirSync(dirPath);
  
    await Promise.all(
      files.map(async (file) => {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
          await unzipFiles(dirPath + "/" + file);
        } else {
          const fullFPath = path.join(dirPath, "/", file);
          const fName = file.replace(".zip", "");
          if (file.endsWith(".zip")) {//used to determine what the file ends with and if the filetype is zip it will then extract that file
            zippedFiles.push(fName);
            await extractZip(fullFPath, path.join(dirPath, "/", fName));
            await unzipFiles(path.join(dirPath, "/", fName));
          }
        }
      })
    );
  };

  module.exports = {unzipFiles};
  //tester
//unzipFiles(usersource);