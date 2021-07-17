const paths = require("./findingPaths.js")
const decomp = require("./decompress.js")
const fs = require("fs")



var index = 0
function UnzipPath(UserGivenDIR) {
    while (index<20) {
        decompAll(UserGivenDIR, index)
        index++
    }
}

function decompAll(UserGivenDIR, i) {
    setTimeout(() => {
        paths.AllPossiblePaths(UserGivenDIR)

        setTimeout(() => {
            fs.readFile('./foundPaths.txt', function(err, data) {
                if(err) throw err;
            
                // splits data at the next line and stores in an array
                ReadPaths = data.toString().split("\n");
                ReadPaths.pop()
        
                var ZippedPaths = gettingZipPaths(ReadPaths)
        
                ReadPaths.forEach(element => {
                    decomp.decompressor(element)
                });
        
                fs.writeFile('./foundPaths.txt', '', function (err) {
                    if (err) return console.log(err);
                });
        
                setTimeout(() => {
                    ZippedPaths.forEach(element => {
                        fs.rmdirSync(element, { recursive: true })
                    });
                }, 700);        
            })
        }, 500); 
    }, 200*i);  
}

function gettingZipPaths(paths) {
    zipPaths = []
    paths.forEach(element => {
        if (element.indexOf(".zip")>=0) {
            zipPaths.push(element)
        }
    });
    return zipPaths
}
module.exports = {UnzipPath};