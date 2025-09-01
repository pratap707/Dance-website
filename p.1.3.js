const { isUtf8 } = require("buffer");
const fs=require("fs");
const text=fs.readFileSync("delet.text" , isUtf8);
console.log(text);