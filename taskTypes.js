/*

98. Task Types

-You hvae some tasks in your Asana account. For each ith of them you know its deadlines, which is the last day by which
it should be completed. As you can see on your calendar, today's date is day.

Asana labels each task in accordance with its due date:
-if the task is due today or its already overdue, its labeled as today.
-if the task is due within a week but not today, that is its deadline it somewhere betweem day + 1 and day + , its labeled as Upcoming.
-All other tasks are labeled as later.

Given an array of deadlines, and today's date, your goal is to find the nyumber of tasks with each label type and return it with the format
[Today, Upcoming, Later], where today, upcoming, and later are the number of tasks that correspond to that label.

EXAMPLE:

deadlines = [1,2,3,4,5] and day = 2, the output should be taskTypes() = [2,3,0].

Today is day 2, so tasks with deadlines at 1 and 2 are labled as Today. The other tasks should be completed within a week, so they should be labeled as
Upcoming. There are no tasks marked as Later.

*/

function taskTypes(arr, target){

    let today = [];
    let upcoming = [];
    let later = [];
    let master = [];

    for (let i = 0; i < arr.length; i++){
        if (arr[i] <= target){
            today.push(arr[i]);
        } else if (arr[i] > target && arr[i] <= target + 7){
            upcoming.push(arr[i]);
        } else {
            later.push(arr[i]);
        }
    }

    master.push(today.length);
    master.push(upcoming.length);
    master.push(later.length);

    return master;



}

console.log(taskTypes([1,2,3,4,5, 99, 7, 9], 2));