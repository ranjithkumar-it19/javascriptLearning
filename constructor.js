//constructor

function Constructor()
{
   this.a =10;
   this.b =20;
   this.add=function()
   {
    return this.a+this.b;
   }
}
let object1 = new Constructor();
console.log(object1.add());