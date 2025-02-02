//passing function as parameter is called callback
function operation(oper,number1,number2)
{
       return oper(number1,number2);
}

let addition = (number1,number2) => number1+number2;
let subraction = (number1,number2) => number1-number2;

console.log(addition,10,2);
console.log(subraction,10,2);