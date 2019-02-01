/*

Problem 98. Tasks Types

You have some tasks in your Asana account. For each ith of them you know its deadlines, which is the last day by which
it should be completed. As you can see on your calendar, today's date is day.

Asana labels each task in accordance with its due date:
-if the task is due today or its already overdue, its labeled as today.
-if the task is due within a week but not today, that is its deadline it somewhere betweem day + 1 and day + , its labeled as Upcoming.
-All other tasks are labeled as later.

Given an array of deadlines, and today's date, your goal is to find the nyumber of tasks with each label type and return it with the format
[Today, Upcoming, Later], where today, upcoming, and later are the number of tasks that correspond to that label.

*/

// ------- Original Way of Solving -------

// function taskTypes(arr, target){

//     let today = [];
//     let upcoming = [];
//     let later = [];
//     let master = [];

//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] <= target){
//             today.push(arr[i]);
//         } else if (arr[i] > target && arr[i] <= target + 7){
//             upcoming.push(arr[i]);
//         } else {
//             later.push(arr[i]);
//         }
//     }

//     master.push(today.length);
//     master.push(upcoming.length);
//     master.push(later.length);

//     return master;

// }

// ------- Refactored -------

function taskTypes(arr: number[], target: number): number[] {

    let today: number = 0, upcoming: number = 0, later: number = 0;

    for (let i = 0; i < arr.length; i++){
        if (arr[i] <= target){
            today++;
        } else if (arr[i] > target && arr[i] <= target + 7){
            upcoming++;
        } else {
            later++;
        }
    }

    return [today, upcoming, later];

}

console.log(taskTypes([1,2,3,4,5], 2));


/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -Given an array of numbers, categorize each number as
         today, upcoming or later, depending on the range from
         a base number given.
    b. What are the inputs that go in the problem?
        -an array of numbers, and a number
    c. What are the outputs that should come from the problem?
        -an array of numbers
    d. Can the outputs be determined from the inputs?
        -Yes, no extra resources needed.
    e. How should i label important pieces of data?
        -todayArray, upcomingArray, laterArray
2. Explore concrete examples.
    deadlines = [1,2,3,4,5] and day = 2, the output should be taskTypes() = [2,3,0].
    Today is day 2, so tasks with deadlines at 1 and 2 are labled as Today. The other tasks should be completed within a week, so they should be labeled as
    Upcoming. There are no tasks marked as Later.
3. Break it down.
    a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor
    -Kept O(n) Linear Time
    -removed unnecessary variable declarations.
    -made better Space Complexity by converting arrays into a number.
    -added TypeScript Syntax.
    -made use of multiple variable declarations in a single line.
    -made use of being able to return an array.

*/

