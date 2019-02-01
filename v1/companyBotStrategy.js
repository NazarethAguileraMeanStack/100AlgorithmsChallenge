/*
31. Company Bot Strategy

-All four trainers have solved the task correctly, so the answer is (3 + 6 + 4 + 5)/4 = 4.5.
Each CodeFights Company Bot is trained by engineers fromn that specific company. The way it works
is that a representative group of engineers from each company is identified as trainers before the bot 
goes live, and they CodeFight against the bot during a training phase. The current training algorithm
is definitely more complex but lets assume it works this way:

-For each Trainer, we collect tow pieces of information [answerTime, correctness], where correctness is 1
if the answer was correct or -1 if the answer was wrong, and 0 if no answer was given. In this case, the bot's
correct answer time for a given task would be the average of the answer times from the trainers who answered
correctly. Given all the information for a specific task, calculate the bot's answer time.

EXAMPLE:

trainingData = [[3,1],[6,1],[4,1],[5,1]], the outputshouldbe 4.5

trainingData = [[4,1],[4,-1],[0,0],[6,1]], the output should be 5.0.
**Only the 1st and 4th trainers (1-based) submitted correct solutions so the answer is (4 + 6)/ 2 = 5.0.

trainingData = [[4,-1], [0,0],[5,-1]], the output should be 0.0.
**No correct answers were given.

*/


function companyBotStrategy(arr){

    let answers = [];

    for(let i = 0; i < arr.length; i++){
        if (arr[i][1] == 1){
        answers.push(arr[i][0]);
        }
    }

    let numOfCorrectAnswers = answers.length;
    if (numOfCorrectAnswers == 0){
        return 0;
    } else {
    return answers.reduce((total, num)=>{return total += num}) / numOfCorrectAnswers;
    }
}


console.log(companyBotStrategy([[3,1],[6,1],[4,1],[5,1]]));
console.log(companyBotStrategy([[4,1],[4,-1],[0,0],[6,1]]));
console.log(companyBotStrategy([[4,-1], [0,0],[5,-1]]));
