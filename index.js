const { Console } = require('console');
const readline = require('readline');
const chalk = require('chalk');//colors
const emojis = require('node-emoji');//emojis
const compress = require('./compress.js');
const decompress = require('./decompress.js');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
console.log(chalk.bold.cyan.bgGray(emojis.get('gun')+'Welcome to the amazing extracti-nator!'+emojis.get('gun')));
console.log(chalk.gray("\n\nA simple application for creating and extracting archives. \nPlease follow the instructions below:"))

console.log(chalk.yellow("\nPlease input a number between 1 and 3"+emojis.get('smile')))
rl.question(chalk.blue('Would you like to: \n1. Compress Folders \n2. Extract Files or folders \n3. Quit application \nInput answer: '), (answer)=>{
        if(answer==1){
            console.log(chalk.yellow("Please input a number between 1 and 4"+emojis.get('smile')))
           rl.question(chalk.blue('What type of file do you want to compress?\n1. .zip, \n2. .tar, \n3. .tgz \nValue: '), (filetype)=>{
               if(filetype==1){
               rl.question(chalk.blue('please input the file path you would like to compress e.g. \\path\\to\\[nameOfFile] '), (path)=>{
                    console.clear();
                    compress.compressingFunc('zip', path);
                    console.log(chalk.green(`Thank you for using the WPR Hitman${emojis.get('gun')}`));
                    process.exit(1);
                    
                })
                
               }
               else if(filetype==2){
                rl.question(chalk.blue('please input the file path you would like to compress e.g. \\path\\to\\[nameOfFile] '), (path)=>{
                    console.clear();
                    compress.compressingFunc('tar', path);
                    console.log(chalk.green(`Thank you for using the WPR Hitman${emojis.get('gun')}`));
                    process.exit(1);
                })
               }
               else if(filetype==3){
                rl.question(chalk.blue('please input the file path you would like to compress e.g. \\path\\to\\[nameOfFile] '), (path)=>{
                    console.clear();
                    compress.compressingFunc('tgz', path);
                    console.log(chalk.green(`Thank you for using the WPR Hitman${emojis.get('gun')}`));
                    process.exit(1);
                })
               }
               else{
                console.log(chalk.red("Error, Please input a number between 1 and 3"+emojis.get('angry')));
                console.log(chalk.green(`Thank you for using the WPR Hitman${emojis.get('gun')}`));
                    process.exit(1);
               }
               
           }) 
        }
        else if(answer==2){
           rl.question(chalk.blue('please input the file path you would like to decompress e.g. \\path\\to\\[nameOfFile].ext '), (filepath)=>{
                  decompress.deCompressingFunc(filepath);  
            
           }) 
        }
        else if(answer==3){
            console.clear();
            console.log(chalk.green(`Thank you for using the WPR Hitman${emojis.get('gun')}`));
        process.exit(1);
        }
        else{
            console.clear();
            console.log('Please enter a valid value')
        }
    
    
})