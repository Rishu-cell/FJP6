//"C:\Users\Asus\OneDrive\Desktop\FPJ6\module2\node\path.js"

let path=require("path");

let extensionName=path.extname("C:\Users\Asus\OneDrive\Desktop\FPJ6\module2\node\path.js");
console.log(extensionName);

//let baseName=path.basename("C:\Users\Asus\OneDrive\Desktop\FPJ6\module1\index.html");
//console.log(baseName);

console.log("#####");
let baseName=path.basename(__filename);
console.log(baseName);

console.log(__dirname); //path till directory
//OR
let dirPath=__dirname;
console.log(dirPath);

console.log(__filename);//path till file

let newFilePath=path.join(dirPath,"test.js"); //joining a path
console.log(newFilePath);