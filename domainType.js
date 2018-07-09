/*

***THIS IS A GoDaddy CHALLENGE QUESTION

43. Domain Type

-GoDaddy makes a lot of different top-level domains available to its customers. A top-level doamin is one that goes difrectlty
after teh last dot(".") ub tge domain name. example.com. To help the users choose from available domains, GoDaddy is introducing a new feature that shows the type
of the chosen top-level domain. You have to implement this feature. To begin with, you want to write a function that labels the domains as "Commercial", "Orgranization",
"Network", or "Information" for .com, .org, .net, or.info respectively. For the given list of domains, return the list of their labels.

EXAMPLE:

for domains = ["en.wiki.org", "www.codefights.com", "happy.net", "code.info"], the output should be ["organization", "commercial", "network", "information"]


*/


function domainType(arr){
    let webTypeArray = [];

    for(let i = 0; i < arr.length; i++){
        if (arr[i].endsWith(".com")){
            webTypeArray.push("commercial");
        }
        else if (arr[i].endsWith(".org")){
            webTypeArray.push("organzation");
        }
        else if (arr[i].endsWith(".net")){
            webTypeArray.push("network");
        }
        else {
            webTypeArray.push("information");
        }
    }

    return webTypeArray;

}


console.log(domainType(["en.wiki.org", "www.codefights.com", "happy.net", "code.info"]));
console.log(domainType(["en.wiki.org", "www.codefights.org", "happy.org", "code.info"]));
console.log(domainType(["en.wiki.com", "www.codefights.com", "happy.net", "code.info"]));
console.log(domainType(["en.wiki.org", "www.codefights.info", "happy.net", "code.info"]));