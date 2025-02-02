//object
let objectName ={
    name : "Ranjithkumar Varadaraj",
    native : "Salem",
    Dob : "14/11/2001",
    "batch Year" : 2019,
    endYear()
    {
        return this["batch Year"]+4;
    }
};

console.log(objectName);
console.log(objectName["batch Year"]);
delete objectName.Dob;
objectName['CGPA score']=8.39;
objectName.college="BIT";
console.log(objectName);
console.log(objectName.endYear());
console.log('native' in objectName);

//using in loops
for(Key in objectName)
{
    console.log(objectName[Key]);
}

for(Key in objectName)
    {
        console.log(Key);
    }
