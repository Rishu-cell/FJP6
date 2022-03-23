//functions without any arguments and return type
function sayHello()
{
    console.log("Hello from Functions");
}

sayHello();

//functions with arguments

function add(num1,num2)
{
    let addition=num1+num2;
    console.log(addition);
}

add(3,5);

//functions with return type

function multiply(num1,num2)
{
    return num1*num2;
}

let m=multiply(3,5);
console.log(m);

//storing a function in a variable
//that is why functions are called first class citizens in js
let a=function sub(num1,num2)
{
    return num1-num2;
}

console.log(a(10,5));

