const readline = require ("readline");
const rl = readline.createInterface({
    input:process.stdin,
    output: process.stdout
});


module.exports = (questions, done) =>{
    const answers = [];
    const [firstQuestion] = questions;

    const questAnswered = answer =>{
        answers.push(answer);
        if(answers.length<questions.length){
            rl.question(questions[answers.length], questAnswered);
        }else{
            done(answers);
        }
        }
        rl.question(firstQuestion, questAnswered);
}