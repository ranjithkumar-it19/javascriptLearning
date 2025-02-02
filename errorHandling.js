//error handling
try{
    let a=undefined;
    console.log(a.name);
}
catch(handling)
{
  console.log("error Occured");
  throw new Error("Syntax error");
}