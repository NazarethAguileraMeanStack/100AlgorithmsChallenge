/*

67. Is Tandem Repeat

-Determine whether the given string can be obtained by one concatentation of some string to itself.

EXAMPLE:

string = "tandemtandem", output should be true.
string = "qqq", output should be false.
string = "2w2ww", output should be false.

*/

function isTandemRepeat(word){

    if (word.length% 2 != 0){
        return false;
    } else {
        let midpoint = word.length / 2;
        let firstHalf = word.substring(0, midpoint);
        let secondHalf = word.substring(midpoint);

        return firstHalf == secondHalf;
    }


}

console.log(isTandemRepeat("tandemtandem"));
console.log(isTandemRepeat("2w2ww"));