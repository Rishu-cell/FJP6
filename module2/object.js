//empty object

let obj={};
console.log(obj);

//creating a object
let ob={
    "Name":"Rishu",
    "Age":19,
    phone_no:9781921208,
    lastName:"Goyal"
};

console.log(ob);
console.log(ob.Age);

//creating a function,array and object inside an object

let obje={
    "Name":"Ram",
    friends:['Shyam','geeta','sita'],
    address:{
        city:"Barnala",
        state:"Punjab"
    },
    isGood:true,
    sayHi: function(){
        console.log("Hello from Ram");
    }
};

console.log(obje);
console.log("###################");
//accessing particular keys
console.log(obje.Name); //Ram
console.log(obje.friends); //complete array
console.log(obje.friends[0]);//shaym
console.log(obje.address);  //complete object
console.log(obje.address.city); //city of address object
console.log(obje.address.state);//Punjab
//console.log(obje.email);//this will give undefined ,program will execute

//function
console.log(obje.sayHi);
console.log(obje.sayHi());
//it will give
//Hello from Ram
//undefined
//this undefined is given bcz our function sayHi is not returning anything
obje.sayHi();

//add a new key to object
console.log("object before adding a new key");
console.log(obje);
console.log("object after adding a key");
obje.Movies=['Avengers','civil War','End Game'];
console.log(obje);

//delete a key
delete obje.Movies;
console.log(obje);

//updation
obje.isGood=false;
console.log(obje.isGood);
obje.address.state="haryana";
console.log(obje);

//second method of accessing
console.log(obje.Name); // dot by default make the key as string
console.log(obje['Name']); //here we have to implicitly mention the dataype of key
//console.log(obje[Name]);//that is why this is will error that name is not defined
console.log(obje['address']['city']);