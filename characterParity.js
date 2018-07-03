/*
25. Character Parity

-Given a character, check if it represents an odd digit, an even digit, or not a digit at all.

EXAMPLE:
"5"; output should be Odd
"8"; output should be Even
"q"; output should be "Not a Digit"



*/

function characterParity(letter){
    let test = parseInt(letter);

    if (test % 2 == 0){
        return "Even";
    } else if (test > 0){
        return "Odd";
    } else {
        return "Not a Digit";
    }
}

console.log(characterParity("5"));
console.log(characterParity("8"));
console.log(characterParity("q"));
console.log(characterParity("18390"));
console.log(characterParity("+"));