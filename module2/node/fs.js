let fs=require("fs");
//console.log(fs);

let path=require("path");

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