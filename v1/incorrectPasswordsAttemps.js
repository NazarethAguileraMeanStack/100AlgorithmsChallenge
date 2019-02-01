/*
63. Incorrect Passwords Attemps

-One Very Important User (VIU) has a Very Confidential Document (VCD) stored in his dropBox account. He doesn't let anyone
see the VCD, especially his roommates who often have access to his devices.

-Opening the DropBox mobile app on the VIU's tablet requires a four-digit passcode. To ensure the confidentiality of the stored
information, the device is locked out of dropbox after 10 consecutive failed passcode attempts. We need to implement a function that 
given an array of attemps made throughout the day and the correct checks to see if the device should be locked, 10 or more consecutive failed
attempts were made.

EXAMPLE:

for passcode = "1111" and attempts = ["1111", "4444", "9999", "3333", "8888", "2222", "7777", "0000", "6767", "7285", "5555", "1111"],
the output shoudl be true.

The first attempt is correct so the user has access to log in. however the next 10 were incorrect so the device should be locked out. Thus output 
is true.

*/


function incorrectPasswordAttempts(attempts, passcode){

    let incorrectCount = 0;

    for (let i = 0; i < attempts.length; i++){
        if (attempts[i] != passcode){
            incorrectCount++
            if (incorrectCount == 10){
                return true;
            }
        } else {
            incorrectCount = 0;
        }
    }

    return (incorrectCount >= 10);

}


console.log(incorrectPasswordAttempts(["1111", "4444", "9999", "3333", "8888", "2222", "7777", "0000", "6767", "7285", "5555", "1111"], "1111"));