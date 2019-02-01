/*

34. Confirm Ending

-Check if a string (first argument, str) ends with a given target string (second arg, target).

-This challenge can be solved with .endsWith() method, which was introduced  in ES205, but for the purpose
of this challenge, we would like you to use one of the javaScript substring methods instead.


EXAMPLE:

confirmEnding("Abstraction", "action"); returns true.
confirmEnding("Open sesame", "pen"); returns false;



*/

function confirmEnding(word, target){
    let testEnding = word.substring(word.length - target.length);
    if(testEnding == target){
        return true;
    } else {
        return false;
    }

}

console.log(confirmEnding("Abstraction", "action"));
console.log(confirmEnding("Open sesame", "pen"));





