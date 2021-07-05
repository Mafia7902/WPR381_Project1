const { Console } = require('console');
const readline = require('readline');
const compress = require('./compress.js');
const decompress = require('./decompress.js');
const rl = rl.readline.createinterface({
    input: process.stdin,
    output: process.stdout
})
console.log('Welcome to \nthe amazing \nextracti-nator');
console.log("A simple application for creating and extracting archives \n For commands Run Just Follow These instruction")
rl.question('Would you like to "Compress Folders" or "Extract Files"?', (answer)=>{
    if(answer=="Compress Folders"){
        console.log("Please input a number between 1 and 4")
       rl.question('What type of file do you want to compress?\n1. .zip, \n2. .gzip, \n3. .tar, \n4. .rar', (filetype)=>{
           if(filetype<1||filetype>4){
               console.log("Please input the correct value")
           }
           else{
            /*compress.function name parse parmeter*/
           }
        
       }) 
    }
    else if(answer=="Extract Files"){
        console.log("Please input a number between 1 and 4")
       rl.question('Please provide the file path?', (filetype)=>{
           
        
       }) 
    }
    else{
        console.log('Please enter a valid values')
    }
})