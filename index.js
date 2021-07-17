const { Console } = require('console');
const readline = require('readline');
const chalk = require('chalk');
const emojis = require('node-emoji');
const compress = require('./compress.js');
const compressPaths = require('./compressingPaths.js')
const decompress = require('./decompress.js');
const decompRessFolder = require('./decompressFolder.js')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

var QuitApp = ()=>{
    console.log(chalk.green(`Thank you for using the WPR Hitman${emojis.get('gun')}`));
    process.exit(1);
}
const TheUi = ()=>{
    console.log(chalk.bold.cyan.bgGray(emojis.get('gun')+'Welcome to the amazing extracti-nator!'+emojis.get('gun')));
console.log(chalk.gray("\n\nA simple application for creating and extracting archives. \nPlease follow the instructions below:"))
var exit = ()=>{
    setTimeout(() => {
        console.log(chalk.green(`Thank you for using the WPR Hitman${emojis.get('gun')}`));
        TheUi();
    }, 2000);
}
    console.log(chalk.yellow("\nPlease input a number between 1 and 2"+emojis.get('smile')));
    rl.question(chalk.blue('Does your folder contain subfolders or additional zipped folders \n1. Yes, \n2. No \nAnswer: '), (answer)=>{
        if(answer==1){
            console.clear();
            console.log(chalk.yellow("\nPlease input a number between 1 and 3"+emojis.get('smile')));
            rl.question(chalk.blue('Would you like to: \n1. Compress Folders \n2. Extract Folders \n3. Quit application \nInput answer: '), (answer)=>{
                    if(answer==1){
                        console.clear();
                        console.log(chalk.yellow("Please input a number between 1 and 4"+emojis.get('smile')))
                       rl.question(chalk.blue('What type of file do you want to compress?\n1. .zip, \n2. .tar, \n3. .tgz \nValue: '), (filetype)=>{
                           if(filetype==1){
                           rl.question(chalk.blue('please input the file path you would like to compress e.g. \\path\\to\\[nameOfFile] '), (path)=>{
                                console.clear();
                                compressPaths.ReadPathsCompress('zip', path);
                                exit();
                            })
                           }
                           else if(filetype==2){
                            rl.question(chalk.blue('please input the file path you would like to compress e.g. \\path\\to\\[nameOfFile] '), (path)=>{
                                console.clear();
                                compressPaths.ReadPathsCompress('tar', path);
                                exit();
                            })
                           }
                           else if(filetype==3){
                            rl.question(chalk.blue('please input the file path you would like to compress e.g. \\path\\to\\[nameOfFile] '), (path)=>{
                                console.clear();
                                compressPaths.ReadPathsCompress('tgz', path);
                                exit();
                            })
                           }
                           else{
                            console.clear();
                            console.log(chalk.red("Error, Please input a number between 1 and 3"+emojis.get('angry')));
                            
                            TheUi();
                           }
                           
                       }) 
                    }
                    else if(answer==2){
                       rl.question(chalk.blue('please input path you would like to decompress e.g. \\path\\to\\ '), (filepath)=>{
                        console.clear();   
                        decompRessFolder.UnzipPath(filepath);
                       }) 
                    }
                    else if(answer==3){
                        console.clear();
                        QuitApp();
                    }
                    else{
                        console.clear();
                        console.log(chalk.red("Error, Please input a number between 1 and 3"+emojis.get('angry')));
                        
                        TheUi();
                    }
                
                
            })
        }
        else if(answer==2){
            console.log(chalk.yellow("\nPlease input a number between 1 and 3"+emojis.get('smile')));
            rl.question(chalk.blue('Would you like to: \n1. Compress Files \n2. Extract Files \n3. Quit application \nInput answer: '), (answer)=>{
                    if(answer==1){
                        console.clear();
                        console.log(chalk.yellow("Please input a number between 1 and 3"+emojis.get('smile')))
                       rl.question(chalk.blue('What type of file do you want to compress?\n1. .zip, \n2. .tar, \n3. .tgz \nValue: '), (filetype)=>{
                           if(filetype==1){
                           rl.question(chalk.blue('please input the file path you would like to compress e.g. \\path\\to\\[nameOfFile] '), (path)=>{
                                console.clear();
                                compress('zip', path)
                                exit();
                            })
                           }
                           else if(filetype==2){
                            rl.question(chalk.blue('please input the file path you would like to compress e.g. \\path\\to\\[nameOfFile] '), (path)=>{
                                console.clear();
                                compress('tar', path);
                                exit();
                            })
                           }
                           else if(filetype==3){
                            rl.question(chalk.blue('please input the file path you would like to compress e.g. \\path\\to\\[nameOfFile] '), (path)=>{
                                console.clear();
                                compress('tgz', path);
                                exit();
                            })
                           }
                           else{
                            console.clear();
                            console.log(chalk.red("Error, Please input a number between 1 and 3"+emojis.get('angry')));
                            
                            TheUi();
                           }
                           
                       }) 
                    }
                    else if(answer==2){
                       rl.question(chalk.blue('please input the file path you would like to decompress e.g. \\path\\to\\[nameOfFile].ext '), (filepath)=>{
                        console.clear();    
                        decompress(filepath);  
                        exit();
                       }) 
                    }
                    else if(answer==3){
                        console.clear();
                        QuitApp();
                    }
                    else{
                        console.clear();
                        console.log(chalk.red("Error, Please input a number between 1 and 3"+emojis.get('angry')));
                        
                        TheUi();
                    }
            })
        }
        else{
            console.clear();
            console.log(chalk.red("Error, Please input a number between 1 and 3"+emojis.get('angry')));
            
            TheUi();
        }
    })
}

TheUi();