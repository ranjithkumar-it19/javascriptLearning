let map=new Map();

map.set(1,"ranjith");
map.set(2,"sridharan")
   .set(3,"rajesh")
   .set(4,"rk");

console.log(map.get(2));
console.log(map.has(2));
console.log(map.delete(4));
console.log(map.size);

for(key of map.values())
{
    console.log(key);
}