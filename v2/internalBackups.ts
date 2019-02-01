/*

Problem 65. Internal Backups

One of the easiest ways to back up files is with an incremental backup. This method
only backs up files that have chaned since the last backup.

You are given a list of changes that were made to the files in your database, where
for each valid i, changes[i][0] is the timestamp of the time the change was made, and
changes[i][1] is the file id.

Knowing the timestamp of the last backup, lastBackupTime, your task is to find the files
which should be included in the next backup. Return the ids of the files that should be 
backed up as an array sorted in ascending order.

*/


// ------ Original Way of Solving ------

// function internalBackups(changedFiles, lastBackupTime) {

//     let needsSaving = [];

//     for (let i = 0; i < changedFiles.length; i++) {
//         if (changedFiles[i][0] > lastBackupTime) {
//             needsSaving.push(changedFiles[i][1]);
//         }
//     }

//     return needsSaving.sort();
// }


// ------ Refactored -------

function internalBackups(changedFiles: number[][], lastBackupTime: number) {

    let needsSaving: number[] = [];

    changedFiles.forEach((element) => {
        if (element[0] > lastBackupTime) needsSaving.push(element[1]);
    });

    return needsSaving.sort();
}

console.log(internalBackups([[461620203, 1],[461620204, 2],[461620205, 6],[461620205, 5],[461620206, 3], [461620207, 5], [461620208, 1]], 461620205));


/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -if the time is more recent than the lastBackupTime, ie greater,
         then add that id to the array. Return the array in sorted order.
    b. What are the inputs that go in the problem?
        -a multidimensional array, a number
    c. What are the outputs that should come from the problem?
        -An array of numbers
    d. Can the outputs be determined from the inputs?
        -Yes, no extra resources needed.
    e. How should i label important pieces of data?
        -needsSaving
2. Explore concrete examples.
    lastBackupTinme = 461620205 and 
    changes = [[461620203, 1],[461620204, 2],[461620205, 6],[461620205, 5],[461620206, 3], [461620207, 5], [461620208, 1]];
    the output should be [1,3,5].
3. Break it down.
    a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor
    -kept O(n) linear time.
    -changed from for-loop to forEach for readability.
    -Made use of single line if-statement.
    -added TypeScript Syntax.

*/

