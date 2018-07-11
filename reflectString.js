/*

84. Reflect String

-Define a string reflection as the result of applying the alphabet reflection to each of its characters.

EXAMPLE:

string = "name", output should be "mznv"


*/


function reflectString(word){
    
    let letters = word.split("");
    let reflectedWord = "";
    let reflectedLetters = {
        a: "z", b:"y", c:"x", d:"w", e:"v", f:"u", g:"t", h:"s", i:"r", j:"q",
        k:"p", l:"o", m:"n", n:"m", o:"l", p:"k", q:"j", r:"i", s:"h", t:"g", u:"f",
        v:"e", w:"d", x:"c", y:"b", z: "a"
    };

    letters.forEach(element => {
        reflectedWord += reflectedLetters[element];
    });

    return reflectedWord;

}

console.log(reflectString("name"));