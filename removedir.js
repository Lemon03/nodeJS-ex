const fs = require ("fs");

fs.readdirSync("path").forEach(fileName =>{
    fs.unlinkSync(`path`);
});

fs.rmdir("path", err =>{
    if(err){
        throw err;
    }
    console.log("")
})