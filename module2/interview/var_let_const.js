//hoisting
//accessing a variable before its decalartion in Js is called hoisting
//code will give undefined
console.log(a);
var a=10;

console.log("#############################");

//var
//accessing before its declaration  i.e hoisting is possible in var
console.log(b);
var b=20;
console.log(b);

//reinitializing
b=30;
console.log(b);

//redeclaration is also possible in var
var b=50;
console.log(b);

console.log("###############################");

//let
//accessing before its declaration  i.e hoisting is not possible in let
//console.log(c);  //error
let c=20;
console.log(c);

//reinitializing is possible in let
c=30;
console.log(c);

//redeclaration is not possible
//var c=50;
//console.log(c); //error


console.log("##########################");

//const
//hoisting is also not possible
//console.log(d);

//declaration method 1
const d=10;
console.log(d);
//declaration method 2
//gives error as yu have to initialize it during declaration only
//const d;
//d=10;
//console.log(d);

//reinitalize is not possible for const
//d=20;
//console.log(d);

//redeclaration  also not possible
//const d=50;
//console.log(d);