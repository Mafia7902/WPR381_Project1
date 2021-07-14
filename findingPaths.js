const fs = require('fs');

module.exports = AllPossiblePaths

// finding all the paths with endpoints (folders with documents)
function AllPossiblePaths(UserGivenDIR){
    var arraOfPaths = gettingPath(UserGivenDIR)
    arraOfPaths.forEach(element => {
        var arraSplitPaths = element.split("\\")
        if (arraSplitPaths[arraSplitPaths.length-1].indexOf(".")>=0) {
            if (fs.existsSync(UserGivenDIR)) {
                fs.appendFile('foundPaths.txt', element + "\n", function (err) {
                    if (err) throw err;
                  });
              } else {
                fs.writeFile('./foundPaths.txt', element, function (err) {
                    if (err) return console.log(err);
                });
              }
        } else {
            AllPossiblePaths(element)
        }
    });
}

// adding folders of folder to a DIR
function gettingPath(UserGivenDIR) {
    var breakPaths = []
    var folderContents = fs.readdirSync(UserGivenDIR)
    folderContents.forEach(element => {
        breakPaths.push(UserGivenDIR + "\\" + element)
    });
    return breakPaths
}