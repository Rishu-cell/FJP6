/*const fs=require('fs')
console.log("before")
let content=fs.readFileSync("file.txt")
console.log(content+" ")
console.log("after")*/
// jb tk file puri read ni hogi tb tk hm koi aur kaam nhi kr payege ye to prblm hai
//to use fs.readFile instead of readFileSync
/*before
Hello i am a file
after*/

//------------------------------------------------------------------------------------------------

const fs=require('fs')
console.log("before")
fs.readFile("file.txt",cb)
function cb (error,data)
{
    console.log(data+" ")
}
console.log("after")

/*before
after
Hello i am a file*/

//-------------------------------------------------------------------------------------------------
/*const fs=require('fs')
console.log("before")
fs.readFile("fle.txt",cb)
function cb (error,data)
{
    if(error){console.log(error+" ")}
    else{
        console.log(data+"")
    }
}
console.log("after")*/
// error kb aayega jb file ka name glt diya hoga


//this is callback hell when yu want to read files in a particular order i.e first the file1 then file 2 even though
//the file 1 is of bigger size than file 2

/*
const fs = require("fs");

console.log("Before ");

fs.readFile("file.txt", function (error,data){
    if(error){
        console.log(error);
    }else{
        console.log(data+"");
        fs.readFile("f2.txt",function(error,data){
            if(error){
                console.log(error);
            }else{
                console.log(data+"");
            }
        });
    }
});

console.log("After");

*/
