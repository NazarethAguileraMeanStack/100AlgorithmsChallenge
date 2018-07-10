/*

79. Pages Numbering With Ink

-You work in a company that prints and publishes books. You are responsible for designing the page
numbering mechanism for the printer. You know how many digits a printer can print with the leftover ink.
Now you want to write a function to determine what the page of the book is that you can number given the current
page and the numberOfDigits left. A page is considered numbered if it has the full number printed. 

Its guranteed that you can number the current page, and that you can't number the last one in the book.

EXAMPLE:

current = 1, and numberOfDigits = 5; the output should be pagesNumberingWithInk(current, numberOfDigits) = 5.

The following number will be printed: 1,2,3,4,5.

current = 21, and numberOfDigits = 5, output should be 22.

current = 8 and numberOfDigits = 4, output should be 10.

*/


function pagesNumberingWithInk(current, numberOfDigits){

    let inkRemaining = numberOfDigits;
    let printCurrentPage = current - 1;

    while (inkRemaining >= printCurrentPage.toString().length){
        printCurrentPage++;
        inkRemaining = inkRemaining - printCurrentPage.toString().length;    
    }
    

    return printCurrentPage;


}

console.log(pagesNumberingWithInk(1, 5));
console.log(pagesNumberingWithInk(21, 5));
console.log(pagesNumberingWithInk(8, 4));