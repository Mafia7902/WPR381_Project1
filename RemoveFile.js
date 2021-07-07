const fs = require('fs');

module.exports = (dir)=>{
    fs.rmdir(dir, { recursive: true }, (err) => {
        if (err) {
            throw err;
        }
    });
}