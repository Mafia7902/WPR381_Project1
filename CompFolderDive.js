const pathFinder = require("./findingPaths")
const compressPaths = require("./compressingPaths")

module.exports = (compType, testFolder) => {
    const compProm = new Promise((res, rej)=>{
        try {
            pathFinder(testFolder)
            res()
        } catch (error) {
            rej()
        }
    });
    
    
    
    compProm.catch((err)=>{
        console.log("an error hath occurred");
    }).then(setTimeout(() => {
        compressPaths(compType, testFolder)
    }, 2000)).catch((err)=>{
        console.log(err);
    })
}