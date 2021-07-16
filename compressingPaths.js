const fs = require('fs');
const comp = require("./compress")

module.exports = {ReadPathsCompress};

// Reading from the cache of all possible DIRs
function ReadPathsCompress(compType, UserGivenPath) {
    fs.readFile('./foundPaths.txt', function(err, data) {
        if(err) throw err;
    
        // splits data at the next line and stores in an array
        ReadPaths = data.toString().split("\n");
        
        // deletes the cache
        fs.writeFile('./foundPaths.txt', '', function (err) {
            if (err) return console.log(err);
        });

        
        // removes the '' from the array 
        for (let i = 0; i < ReadPaths.length; i++) {
            if (ReadPaths[i]=='') {
                ReadPaths.splice(i,1)
            }
        }
    
        // zips anything not a folder (mandatory for the rest of the code to work)
        ReadPaths.forEach(element => {
            comp(compType, element)
        });
    
        // gives time to zip all documents in previous step
        setTimeout(() => {
    
            // example ThisIsGranny\New Text Document.txt this then removes the "\New Text Document.txt" from the 
            // array element 
            AllPathArray = poppingDoc(ReadPaths)
    
            // allows for the incremental compression of all DIRs 
            let index = 0;
            do {
                var impy = task(index, AllPathArray);
                index++;
            } while (index <= AllPathArray.length );
        }, 6000);
    
        // responsible for compressinf the correct dir
        function task(index, AllPathArrayV2) {
            setTimeout(function() {
                for(let i = 0; i < AllPathArrayV2.length ;i++) {
                    if(AllPathArrayV2.indexOf(AllPathArrayV2[i]) !== AllPathArrayV2.lastIndexOf(AllPathArrayV2[i]) || AllPathArrayV2[i] == UserGivenPath){
                        result = true;
                        AllPathArrayV2.splice(i,1)
                    } else{
                        if (allZipped(AllPathArrayV2[i])) {
                            comp(compType, AllPathArrayV2[i])
                            //console.log("done: ("+ index +") "+AllPathArrayV2[i]);
                            var shortenedPath = poppingFolders(AllPathArrayV2[i])
                            AllPathArrayV2[i] = shortenedPath
                        } else {
                            AllPathArrayV2.splice(i,1)
                        } 
                    }
                }
                console.log();
                console.log();
                return AllPathArrayV2.length
            }, 2000 * index);
        }
    });
}


// ensures all folders and documents in a folder are zipped
function allZipped(path) {
    var zipped = []
    var TotalFolder = fs.readdirSync(path)

    TotalFolder.forEach(element => {
        if (element.indexOf("." + compType)>=0) {
            zipped.push(element)
        } 
    });

    if (TotalFolder.length == zipped.length) {
        return true
    } else {
        return false
    }
}

// removes \New Text Document.txt from the array 
function poppingDoc(possiblePath) {
    var tempStore = []
    possiblePath.forEach(element => {
        var splitPath = element.split("\\")
        splitPath.pop()
        var reJoinedPath = splitPath.join("\\")
        tempStore.push(reJoinedPath)
    });
    return tempStore
}

// similar to poppingDoc it pops folder from DIR 
// goes in:
// C:\Users\janvw\Desktop\TestingFolderDiverLastFileNotZipped\ThisIsGranny
// comes out: 
// C:\Users\janvw\Desktop\TestingFolderDiverLastFileNotZipped
function poppingFolders(initialPath) {
    var splitInitialPath = initialPath.split("\\")
    splitInitialPath.pop()
    var joinedPath = splitInitialPath.join("\\")
    return joinedPath
}

