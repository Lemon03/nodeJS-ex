const fs = require("fs");

const md = `
#this is a new file
we can write text to a file with fs.writeFile

* fs.readdir
* fs.readFile
* fs.writeFile

`;

fs.writeFile("./import+export/note.md", md.trim(), err =>{
    if (err){
        throw err;
    }
    console.log("file saved");
})