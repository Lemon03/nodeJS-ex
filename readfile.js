const fs = require("fs");

const text = fs.readFileSync("readme.md", "utf-8", (err,text)=>{
    console.log("file contents read");
    console.log(text);
});

