//promises
let isDataFound =false;
function waitInOueue()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(isDataFound)
            {
                resolve("Data found");
            }
            else{
                reject("Data Not Found");
            }
        },3000)
    })
}
function retriveData()
{
    waitInOueue().then((message)=>{
        console.log(message);
    })
    .catch((error)=>{
        console.log(error);
    })
    .finally((exit)=>{
        console.log("your welcome");
    })
}

retriveData();
console.log("Loading.....");