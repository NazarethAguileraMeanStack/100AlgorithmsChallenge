/*

91. Stolen Lunch

-When you recently visited your little nephew, he told you a sad story: there's a bully at school
who steals his lunch every day, and locks it away in his locker. He also leaves a note with a strange coded message.
Your nephew gave you one of the notes in hopes that you can decipher it. And you did, it looks like all
the digits in it are replaced with letters and vice-versa. Digit 0 is "a", and 1 is "b", and so on with digit 9 replaced by "j".

The note is different every day, so you decide to write a function that will decipher it for your nephew.

EXAMPLE:

note = "you'll n4v4r 6u4ss 8t: cdja", the output is "you'll never guess it: 2390".

*/

function stolenLunch(msg){

    let decoded = msg.split("");
    let decipher = "";

    let dictionary = {
        "0":"a", "1":"b", "2":"c", "3":"d", "4":"e", "5":"f", "6":"g", "7":"h", "8":"i", "9":"j",
        "a":"0", "b":"1", "c":"2", "d":"3", "e":"4", "f":"5", "g":"6", "h":"7", "i":"8", "j": "9",
    };

    decoded.forEach(element => {
        if(dictionary[element]){
           decipher +=  dictionary[element];
        } else {
            decipher += element;
        }
    });

    return decipher;



}

console.log(stolenLunch("you'll n4v4r 6u4ss 8t: cdja"));
