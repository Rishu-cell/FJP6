//move a file

let fs = require("fs");
let path = require("path");

let srcPath = path.join(__dirname,"file1.txt");
// console.log(srcPath);
let destPath = path.join(__dirname,"newFolder","file1.txt");
// console.log(destPath);
fs.copyFileSync(srcPath,destPath);

fs.unlinkSync(srcPath);

//move a file is actually copying a file from src to destination an deleting the file from its prev orignal position
