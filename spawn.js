const cp = require("cp");
const questionApp = cp.spawn("node", ["questions.js"]);

questionApp.stdin.write("Alex \n");
questionApp.stdin.write
questionApp.stdout.on("data", data =>{
    console.log(`from the question app:${data}`);
});

questionApp.on("close", ()=>{
    console.log(`questionAPP process exited`);
})