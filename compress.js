var compress = require('compressing');

var choice = "zip";

switch (choice) {
    case "zip":
        console.log("this is zip")

        compress.zip.compressFile('F:\\Users\\Luke\\Desktop\\CompressThis.txt', 'F:\\Users\\Luke\\Desktop\\CompressThis.zip').then(console.log("File has been sucessfully compressed to .zip")).catch(console.log("Error!"));
        break;

    case "tar":
        console.log("this is tar")

        compress.tar.compressFile('', '').then(console.log("File has been sucessfully compressed to .tar")).catch(console.log("Error!"));
        break;

    case "tgz":

        compress.tgz.compressFile('', '').then(console.log("File has been sucessfully compressed to .tgz")).catch(console.log("Error!"));
        console.log("this is tgz")
        break;

    default:
        console.log("Error! File extension not supported!")
        break;
}