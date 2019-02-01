/*

Problem 31.

All four trainers have solved the task correctly, so the answer is
(3 + 6 + 4 + 5)/ 4 = 4.5; Each Codefights Company Bot is trained by
engineersfrom that specific company. The way it works is that a
representative group of engineers from each company is identified as
trainers before the bot goes live and they CodeFight against the bot
during a training phase. The current training algorithm is definitely
more complex, but let's assume it works this way:

For each trainer, we collect two pieces of information per task
[answerTime, correctness], where correctness is 1 if the answer was correct,
and -1 if the answer was wrong, and 0 if no answer was given. In this case,
the bot's correct answer time for a given task, would be the average of the 
answer times from the trainers who answered correctly.
Given all of the training information for a specific task, calculate the bot's answer time.


*/

// ------ Original Way of Solving ------

// function companyBotStrategy(arr) {

//     let totalTime = 0;
//     let correctAnswers = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i][1] === 1) {
//             totalTime += arr[i][0];
//             correctAnswers++;
//         }
//     }
//     if (correctAnswers === 0) {
//         return 0;
//     }
//     return totalTime / correctAnswers;

// }


// ------ Refactored ------
function companyBotStrategy(arr: number[][]): number {

    let totalTime: number = 0, correctAnswers: number = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i][1] === 1) {
            totalTime += arr[i][0];
            correctAnswers++;
        }
    }

    return totalTime / correctAnswers || 0;

}

console.log(companyBotStrategy([[3,1],[6,1],[4,1],[5,1]]));
console.log(companyBotStrategy([[4,1],[4,-1],[0,0],[6,1]]));
console.log(companyBotStrategy([[4,-1],[0,0],[5,-1]])); 


/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -Given a multidimensional array, where each subarray
        represents the [timeNeeded, wasCorrect], find the average
        time of the correct answers.
    b. What are the inputs that go in the problem?
        -a multidimensional array of numbers.
    c. What are the outputs that should come from the problem?
        -a single number, can be 0.
    d. Can the outputs be determined from the inputs?
        -Yes, no extra resouces needed.
    e. How should i label important pieces of data?
        -correctTimes, totalCorrectAnswers
2. Explore concrete examples.
    ([[3,1],[6,1],[4,1],[5,1]]) returns 4.5
    ([[4,1],[4,-1],[0,0],[6,1]]) returns 5.0
    ([[4,-1],[0,0],[5,-1]]) returns 0.0
3. Break it down.
    a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor
    -O(n) linear time
    -Added TypeScript Syntax
    -Made use of returning || 0 to eliminate cases where we are dividing by zero.
    -initialized variables together.

*/

