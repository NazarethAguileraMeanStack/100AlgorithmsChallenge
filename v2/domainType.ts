/*

Problem 43.

GoDaddy makes a lot of different top-level domains available to its customers. A top-level doamin is one that goes difrectlty
after teh last dot(".") ub tge domain name. example.com. To help the users choose from available domains, GoDaddy is introducing a new feature that shows the type
of the chosen top-level domain. You have to implement this feature. To begin with, you want to write a function that labels the domains as "Commercial", "Orgranization",
"Network", or "Information" for .com, .org, .net, or.info respectively. For the given list of domains, return the list of their labels.



*/

// ------ Original Way of Solving ------

// function domainType(arr) {

//     let domainArray = [];

//     for (let i = 0; i < arr.length; i++) {
//         let ending = arr[i].substring(arr[i].length - 3);
//         switch(ending){
//             case 'org':
//             domainArray.push('organization');
//             break;
//             case 'com':
//             domainArray.push('commercial');
//             break;
//             case 'net':
//             domainArray.push('network');
//             break;
//             case 'nfo':
//             domainArray.push('information');
//             default:
//             break;
//         }
//     }
//     return domainArray;
// }

// ------ Refactored ------

function domainType(arr: string[]) {

    let domainArray: string[] = [], domains = { 'org': 'organization', 'com': 'commercial', 'net': 'network', 'info': 'information'};

    for (let i = 0; i < arr.length; i++) {
        let domain = arr[i].split('.');
        domainArray.push(domains[domain[domain.length - 1]]);
    }
    return domainArray;
}

console.log(domainType(["en.wiki.org", "www.codefights.com", "happy.net", "code.info"]));
console.log(domainType(["en.wiki.org", "www.codefights.org", "happy.org", "code.org"]));
console.log(domainType(["en.wiki.info", "www.codefights.info", "happy.net", "code.com"]));


/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -check what the last 3 letters are, and output fullname
    b. What are the inputs that go in the problem?
        -an array of strings with domain name endings
    c. What are the outputs that should come from the problem?
        -an array of strings.
    d. Can the outputs be determined from the inputs?
        -yes, no extra libraries are needed
    e. How should i label important pieces of data?
        -domainArray
2. Explore concrete examples.
    for domains = ["en.wiki.org", "www.codefights.com", "happy.net", "code.info"], the output should be ["organization", "commercial", "network", "information"]
3. Break it down.
    a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor
    -O(n) linear time.
    -Made use of object instread of switch for code clarity.
    -added TypeScript Syntax;
    -used the split method, because in first approach, it was looking for 'nfo', where
     now it checks to make sure it is 'info' for more correctness.

*/

