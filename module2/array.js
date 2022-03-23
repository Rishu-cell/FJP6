//empty array
let arr=[];
console.log(arr);

//array with elements
let eleArr=[1,2,3,'a','I am a string',4.5,false];
console.log(eleArr);

//accessing the elements by indexes
console.log("Element at 4th index " +eleArr[4]);
console.log("Element at 5th index " +eleArr[5]);

//changing the element
eleArr[2]='Nothing';
console.log(eleArr);

console.log("#############################");
//Arrays Methods
//1.push
console.log("Array before push");
console.log(eleArr);
//push method is used to push element in the end
eleArr.push("new item");
console.log("Array after push");
console.log(eleArr);

console.log("#############################");

//2.pop
console.log("Array before pop");
console.log(eleArr);
//pop method is used to pop element from the end
eleArr.pop();
console.log("Array after pop");
console.log(eleArr);

console.log("#############################");

//3.shift
console.log("Array before shift");
console.log(eleArr);
//shift method removers the element from start
eleArr.shift();
console.log("Array after shift");
console.log(eleArr);

console.log("#############################");

//4.unshift
console.log("Array before unshift");
console.log(eleArr);
//shift method adds the element at start
eleArr.unshift("new element");
console.log("Array after unshift");
console.log(eleArr);

console.log("##########################");

//5.length
let len=eleArr.length;
console.log(len);



