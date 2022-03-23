let str="I am a string";
console.log(str);

//length
let len=str.length;
console.log(len);

//slice method
let slic=str.slice(2,5); //it doesnt include the 5th index element
console.log(slic);

//replace method
let rep=str.replace("am","was");
console.log(rep); //creates a new string with replaced char
console.log(str); //original string doesnt chnge 

//uppercase
let upp=str.toUpperCase();
console.log(upp);
//lowercase
let low=str.toLowerCase();
console.log(low);

//concat
let firstName="Rishu";
let lastName="Goyal";

let fullName=firstName+lastName;
console.log(fullName);
//or
let fullname=firstName.concat(lastName);
console.log(fullname);

//charAt
console.log(str.charAt(0));

//splitted
let spli=str.split(" ");//returns an array
console.log(spli);