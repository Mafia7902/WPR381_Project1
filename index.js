const { Console } = require('console');
const readline = require('readline');
const compress = require('./compress.js');
const decompress = require('./decompress.js');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
var file = "";
var path2g = "";
console.log('Welcome to \nthe amazing \nextracti-nator');
console.log("A simple application for creating and extracting archives \n For commands Run Just Follow These instruction")
rl.question('Would you like to "Compress Folders" or "Extract Files"? ', (answer)=>{
    if(answer=="Compress Folders"){
        console.log("Please input a number between 1 and 4")
       rl.question('What type of file do you want to compress?\n1. .zip, \n2. .tar, \n3. .tgz ', (filetype)=>{
           if(filetype==1){
            rl.question('please input the file path you would like to compress e.g. //path//to//[nameOfFile]', (path)=>{
                console.log("this is case 1")
                compress.compressingFunc('zip', path);
                
            })
            
           }
           else if(filetype==2){
            rl.question('please input the file path you would like to compress e.g. //path//to//[nameOfFile]', (path)=>{
                console.log("this is case 2")
                compress.compressingFunc('tar', path);
                
            })
           }
           else if(filetype==3){
            rl.question('please input the file path you would like to compress e.g. //path//to//[nameOfFile]', (path)=>{
                console.log("this is case 3")
                compress.compressingFunc('tgz', path);
                
            })
           }
           else{
            console.log("Please input a number between 1 and 3");
           }

            
        
       }) 
    }
    else if(answer=="Extract Files"){
       rl.question('Please provide the file path?', (filepath)=>{
              decompress.deCompressingFunc(filepath);  
        
       }) 
    }
    else{
        console.log('Please enter a valid values')
    }
})