/*

****This is an interview question by DODO

65. Internal Backups

-One of the easiest ways to back up files is with an incremental backup. This method
only backs up files that have changed since the last backup.

You are given a list of changes that were made to the files in your database, where each 
valud i, changes [i][0] is the timestamp of the time the change was made and changes[i][i]
is the file id.

Knowing the timestamp of the lastBackupTime, your task is to find the files which should be
included in the next backup. Return the ids of the files that should be back up as an array sorted
in ascending order.

EXAMPLE:

lastBackupTinme = 461620205 and 
changes = [[461620203, 1],[461620204, 2],[461620205, 6],[461620205, 5],[461620206, 3], [461620207, 5], [461620208, 1]];

the output should be [1,3,5].



*/


function internalBackups(changes, lastBackupTime){

    let readyForBackup = [];

    for(let i = 0; i < changes.length; i++){
        if (changes[i][0] > lastBackupTime){
            readyForBackup.push(changes[i][1])
        }
    }
    return readyForBackup.sort();

}

console.log(internalBackups([[461620203, 1],[461620204, 2],[461620205, 6],[461620205, 5],[461620206, 3], [461620207, 5], [461620208, 1]], 461620205));