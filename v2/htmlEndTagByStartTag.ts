/*

Problem 62. HTML End Tag By Start Tag


You are implementing your own HTML editor. To make it more
comfortable for developers, you would like to add an auto-complete
feature to it.

Given the starting HTML tag, find the appropriate end tag which your editor
should propose.


*/


// ------ Original Way of Solving ------

// function htmlEndTagByStartTag(startTag) {

//     let closingElement = '';

//     for (let i = 1; i < startTag.length; i++) {
//         if (startTag[i].toLowerCase() === startTag[i].toUpperCase()) {
//             break;
//         }
//         closingElement += startTag[i];
//     }

//     return "</" + closingElement + ">";
// }



// ------ Refactored ------

function htmlEndTagByStartTag(startTag: string): string {
    
    let closingTag: string = '', i: number = 1;
    return '</' + createTag(startTag) + '>';


    function createTag(tag) {
        if(tag[i].toLowerCase() === tag[i].toUpperCase()) return closingTag;
        closingTag += tag[i];
        i++;
        return createTag(tag);
    }
}

console.log(htmlEndTagByStartTag("<button type='button' disabled>"));
console.log(htmlEndTagByStartTag("<i>"));


/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        Given a start tag, provide the end tag.
    b. What are the inputs that go in the problem?
        -a string representing an html tag
    c. What are the outputs that should come from the problem?
        -a string representing an html closing tag
    d. Can the outputs be determined from the inputs?
        -You should look up html start tag and closing tag.
    e. How should i label important pieces of data?
        -startTag, closingTag
2. Explore concrete examples.
    ('<button type='button' disabled>') returns '</button>'
    ('<i>') returns '</i>'
3. Break it down.
    a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor
    -Kept O(n) linear time
    -Made use of a recursive helper method to eliminate for-loop
    -added TypeScript Syntax.

*/

