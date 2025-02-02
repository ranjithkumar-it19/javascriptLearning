//async and await
let isDataFound = true;
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
async function retriveData()
{
    try{
   let data= await waitInOueue();
   console.log(data);
    }
    catch{
        console.log("Data Not fount");
    }
}
retriveData();
console.log("loading.....");