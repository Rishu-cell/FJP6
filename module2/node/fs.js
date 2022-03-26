let fs=require("fs");
//console.log(fs);

let path=require("path");
/*

let filePath=path.join(__dirname,'file.txt'); //till here file.txt doesnt exist
console.log(filePath);

fs.writeFileSync(filePath,"hello i am a txt file"); //will create a file and also write in a file

fs.writeFileSync(filePath,"again writing in the existing file");//will override

//fs.writeFileSync will create a new file if it doesnt exist and write into that file
//but if the file is already existing then it will override the earlier content

//read
let content=fs.readFileSync(filePath,'utf-8');
console.log(content);

//read file will read  a file and if doesnt exists gives error

//update
//append the content in the end
console.log("Before updation");
console.log(fs.readFileSync(filePath,'utf-8'));
console.log("After updation");
fs.appendFileSync(filePath,"\nNewely added content");
console.log(fs.readFileSync(filePath,'utf-8'));

//delete
fs.unlinkSync(filePath);

*/

//create a directory
if(!fs.existsSync("hamariDirectory"))
fs.mkdirSync("hamariDirectory");
//else
//console.log("already existing");

//read content inside any directory  or read a directory

//let folderPath="C:/Users/Asus/OneDrive/Desktop/FPJ6/module1";

let folderPath=__dirname;
let folderContent=fs.readdirSync(folderPath);
console.log(folderContent);

//delete a directory

fs.rmdirSync("hamariDirectory");

//copy a file 

let sourcePath = path.join(__dirname,"file.txt")
let destinationPath = path.join(__dirname,"module","file.txt")
console.log(sourcePath);
console.log(destinationPath);

fs.copyFileSync(sourcePath,destinationPath);