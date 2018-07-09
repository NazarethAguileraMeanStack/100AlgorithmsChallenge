/*
41. Different Symbols Naive

-Given a string, find the number of different characters in it.

EXAMPLE:

string = "cabca", output should be 3. (a,b,c)

*/



function differentSymbolsNaive(word){

    let wordArray = word.split("").sort();

    for(let i = 0; i < wordArray.length; i++){
        if(wordArray[i] ==wordArray[i + 1]){
            wordArray.splice(i, 1);
        }
    }

    return wordArray.length;
    
}

console.log(differentSymbolsNaive("cabca"));
console.log(differentSymbolsNaive("Nazareth"));
console.log(differentSymbolsNaive("Aguilera"));
console.log(differentSymbolsNaive("JavaScript"));