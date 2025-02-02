//reference 
let a=10;
let b=a;
console.log(a,b);
b=20;
console.log(a,b);

//refrence using object

let objectA ={
    name : "rk",
    age : 23
}

let objectB= objectA;
console.log(objectA,objectB);

objectB.age=24;
console.log(objectA,objectB);
