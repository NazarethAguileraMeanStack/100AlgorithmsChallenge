/*
8. Alphabetic Shift

Given a string, replace each of its character by the next one in the English alphabet.
(z would be replaced by a)


example:
"crazy", output would be "dsbaz"



*/

function alphabeticShift(word){

    let wordArray = word.split("");
    let newArray = [];
    for (let i = 0; i < wordArray.length; i++){
        if (wordArray[i].charCodeAt(0) == 90 || wordArray[i].charCodeAt(0) == 122){
            newArray.push(wordArray[i].replace(wordArray[i], String.fromCharCode(wordArray[i].charCodeAt(0) - 25)));
        } else if(wordArray[i].charCodeAt(0) == 32){
            newArray.push(" ");
        } else {
        newArray.push(wordArray[i].replace(wordArray[i], String.fromCharCode(wordArray[i].charCodeAt(0) + 1)));
        }
    }

    return newArray.join("");
}



console.log(alphabeticShift("crazy"));
console.log(alphabeticShift("abcd"));
console.log(alphabeticShift("Naz"));
console.log(alphabeticShift("Nazareth Aguilera"));