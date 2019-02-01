
/*
Problem 3

Given a rectangular matrix of characters, add a border of asterisks(*) to it.

*/


function addBorder(a: string[]): string[] {
    let wall: string = '';
    let arrayWithBorder: string[] = [];

    for (let char of a[0]){
        wall += '*';
    }
    
    a.forEach((element) => {
        arrayWithBorder.push('*' + element + '*');
    });
    
    arrayWithBorder.unshift(wall);
    arrayWithBorder.push(wall);
    return arrayWithBorder;

}

console.log(addBorder(['abc', 'ded']));


/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -given an array of strings, add '***' as first
         and last index.
        -add '*' to the front and back of each word in array.
    b. What are the inputs that go in the problem?
        -array of strings.
    c. What are the outputs that should come from the problem?
        -return an array of strings with '***' at front and end.
    c. Can the outputs be determined from the inputs?
        -Yes, no further help needed.
    e. How should i label important pieces of data?
        -insertAsterisks, copy of array
2. Explore concrete examples.
    ['abc', ded]; returns ['***', '*abc*', '*ded*', '***']
3. Break it down.
    a. Write out the steps you need to take.
4. Solve/Simplify
    - Solved; Took about 10 minutes. Had trouble editing each element.
5. Refactor
    -changed from for of to .forEach loop for cleanliness.
    -eliminated unnecessary array copy.
    -updated to typescript syntax.
    -better variable naming.
    -add in loop for wall to scale with word length
    -kept O(n) time.
    
*/