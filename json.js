//object to json

let object1 ={
    name : "ranjithkumar",
    age : 23,
    dob : "14/11/2001"
};

console.log(JSON.stringify(object1));

//string to object

let string = '{"name" : "ranjithkumar", "age" : 23, "dob" :"14/11/2001"}';
console.log(JSON.parse(string));