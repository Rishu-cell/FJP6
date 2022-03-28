/*
//memory allocate first then code execute so it give undefined
console.log(a);

var a="Hello";

//output is undefined here
*/
/*
console.log(a);

let a="Hello"; 
//this will give error as a not defined 
*/





/*
console.log(a);  //undefined (bcz before the execution of code memory is allocated to each variable )

var a=10;

console.log(a);  //10

function fun(){      //this is just function decalartion so here compiler will make a new execution context here when it is called
    console.log(b);  //undefined //here similarly all the variables will be allocated ith some memory 
    var b=20;
    console.log(b); //20
    return b;
}

console.log(c);  //undefined
var c=30;
console.log(c); //30

console.log(d);  //undefined
var d=fun();  //new execution context is made here 
console.log(d); //20
*/
/*
undefined
10
undefined
30
undefined
undefined
20
20
*/



/* 
fun();      //here yu are calling undefined function //error
//since fun is a variable so it will be allocated memory before execution 

var fun=function(){
    console.log("Hello World");
}

fun();
*/
//gives error in first line as fun() is not a function