const fs = require ("fs");

fs.renameSync("path", "path");
fs.rename("path", "path", err =>{
    if(err){
        throw err;
    }
});

setTimeout(()=>{
    fs.unlinkSync("path");
}, 4000);