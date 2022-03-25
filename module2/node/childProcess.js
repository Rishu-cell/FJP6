let cp=require("child_process");
//console.log(cp);
//cp.execFileSync('calc'); //opens calculator 
//cp.execSync("code"); //open vs code

let content=cp.execSync("node test.js");

console.log("Output of test.js= "+content);

