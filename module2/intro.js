console.log("Hello Guys");

console.log("Pepcoders");

//variable declaration

let a=10; //numeric
console.log(a);

let b='a'; //char
console.log(b);

let c='I am a string'; //string
console.log(c);

let d=true;     //boolean value
console.log(d);

//loops
//for loop
for(let i=1;i<=5;i++)
{
    console.log(i);
}
//while loop
let count=1;
while(count<=5)
{
    console.log(count);
    count++;
}

//is prime ques

let n=4;
let cnt=0;//count
for(let i=1;i<=n;i++)
{
    if(n%i==0)
    cnt++;
}
if(cnt==2)
console.log("prime");
else
console.log("NOT PRIME");