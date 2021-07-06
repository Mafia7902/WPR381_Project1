const { Console } = require('console');
const readline = require('readline');
const compress = require('./compress.js');
const decompress = require('./decompress.js');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
console.log('Welcome to \nthe amazing \nextracti-nator');
console.log("A simple application for creating and extracting archives \n For commands Run Just Follow These instruction")
rl.question('Would you like to "Compress Folders" or "Extract Files"?', (answer)=>{
    if(answer=="Compress Folders"){
        console.log("Please input a number between 1 and 4")
       rl.question('What type of file do you want to compress?\n1. .zip, \n2. .gzip, \n3. .tar, \n4. .rar', (filetype)=>{

            switch (filetype) {
                case 1:
                    
                    break;
                    
                case 2:
                
                    break;

                case 3:
                
                    break;
        
                default:
                    console.log("Please input the correct value")
                    break;
            }
        
       }) 
    }
    else if(answer=="Extract Files"){
       rl.question('Please provide the file path?', (filepath)=>{
           /*decompress.*/          
        
       }) 
    }
    else{
        console.log('Please enter a valid values')
    }
})