/*

80. Pig Latin

-Translate the provided string into pig latin.

Pig latin takes the first consonant (or consonant cluster) of an english word, moves it to the end, and suffixes an "ay".

If a word begins with a vowel, you just add "way" to the end.

Input strings are guranteed to be english words in all lower case.

EXAMPLE:

pigLatin("glove") should return "oveglay"
pigLatin("eight") shoudl return "eightway"

*/

function pigLatin(word){

    let vowels = "aeiou".split("");
    let testWord = word.split("");
    let firstVowelIndex = 0;

    if(vowels.includes(testWord[0])){
        return testWord.join("") + "way";
    } else {
        for (let i = 0; i < word.length;i++){
            if(vowels.includes(word[i])){
                firstVowelIndex = i;
                break;
            }
        }
        
        return word.substring(firstVowelIndex) + word.substring(0, firstVowelIndex) + "ay";
    }


}

console.log(pigLatin("glove"));
console.log(pigLatin("eight"));
console.log(pigLatin("Nazareth"));
console.log(pigLatin("hello"));
console.log(pigLatin("apple"));