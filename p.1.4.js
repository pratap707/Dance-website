// sycronous 
//line by line execution
//asycronous
//line by line ececuton note guarenty
// callbacks will fire

const fs = require("fs");
let text = fs.readFile("dele.text","utf-8" , (a ,b)=>{
console.log(a,b)
});
console.log("this is a message");