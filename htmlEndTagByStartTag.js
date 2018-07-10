/*

62. HTML End Tag By Start Tag

-You are implementing your own HTML editor. To make it more comfortable for developers,
you would like to add an auto-completion feature to it.

Given the starting HTML tag, find the appropriate end tag which your editor should propse.

If you are not familiar with HTML, consult with this note.

EXAMPLE:

startTag = "<button type="button" disabled>", output should be "</button>"

startTag = "<i>", output should be "</i>"

*/


function htmlEndTagByStartTag(startTag){

    let openingTag = startTag.split(" ")[0];

    let openingBracket = "<";

    let index = startTag.indexOf(openingBracket);
    let endingTag = openingTag.split("");
    endingTag.splice(index + 1, 0, "/");

    if (endingTag[endingTag.length - 1] != ">"){
        return endingTag.join("") + ">";
    } else {
        return endingTag.join("");
    }


    return endingTag;


}

console.log(htmlEndTagByStartTag("<button type='button' disabled>"));
console.log(htmlEndTagByStartTag("<i>"));
console.log(htmlEndTagByStartTag("<body>"));
console.log(htmlEndTagByStartTag("<H1 class='header'>"));



