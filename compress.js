var compress = require('compressing');

var choice = "tar";

switch (choice) {
    case "zip":
        console.log("this is zip")
        break;

    case "tar":
        console.log("this is tar")
        break;

    case "gzip":
        console.log("this is gzip")
        break;

    case "tgz":
        console.log("this is tgz")
        break;

    default:
        console.log("Bullshit")
        break;
}