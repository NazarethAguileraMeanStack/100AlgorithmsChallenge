/*

Problem 79. Pages Numbering With Ink

You work in a company that prints and publishes books. You are responsible for designing the page
numbering mechanism for the printer. You know how many digits a printer can print with the leftover ink.
Now you want to write a function to determine what the page of the book is that you can number given the current
page and the numberOfDigits left. A page is considered numbered if it has the full number printed. 
Its guranteed that you can number the current page, and that you can't number the last one in the book.

*/

// ------ Original Way of Solving -------

// function pagesNumberingWithInk(current, numberOfDigits){

//     let inkRemaining = numberOfDigits;
//     let printCurrentPage = current - 1;

//     while (inkRemaining >= printCurrentPage.toString().length){
//         printCurrentPage++;
//         inkRemaining = inkRemaining - printCurrentPage.toString().length;    
//     }
    
//     return printCurrentPage;

// }


// ------ Refactored ------

function pagesNumberingWithInk(current: number, inkRemaining: number): number {

    let printCurrentPage: number = current - 1;

    while (inkRemaining >= printCurrentPage.toString().length) {
        printCurrentPage++;    
        inkRemaining -= printCurrentPage.toString().length;
    }
    
    return printCurrentPage;

}

console.log(pagesNumberingWithInk(1, 5));
console.log(pagesNumberingWithInk(21, 5));
console.log(pagesNumberingWithInk(8, 4));



/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -Stating with the current page, write as many digits
         as possible with the remaining number of characters you can print
         to the page as the numberOfDigts remaining.
    b. What are the inputs that go in the problem?
        -a number, a number
    c. What are the outputs that should come from the problem?
        - a number
    d. Can the outputs be determined from the inputs?
        -Yes, no extra resources needed.
    e. How should i label important pieces of data?
        -currentPage, inkRemaining
2. Explore concrete examples.
    current = 1, and numberOfDigits = 5; the output should be pagesNumberingWithInk(current, numberOfDigits) = 5.
    The following number will be printed: 1,2,3,4,5.
    current = 21, and numberOfDigits = 5, output should be 22.
    current = 8 and numberOfDigits = 4, output should be 10.
3. Break it down.
    a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor
    -Kept O(n) linear time
    -Removed unnecessary variable declaration
    -added TypeScript Syntax


*/


