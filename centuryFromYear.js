/*
24. Century From Year

-Given a year, reutrn the century it is in. The first century spans from year 1 up to and including year 100.
The second century is from 101 up to year 200, etc.

EXAMPLE:
for year = 1905, the output should be 20.
for year = 1700, the output should be the 17.

*/


function centuryFromYear(year){
    let digits = year.toString().split("");
    if(digits[2] && digits[3] == "0"){
        return `From the ${digits[0]}${digits[1]} Century`
    } else {
        let nextYear = digits[0] + digits[1];
        let numYear = parseInt(nextYear);
        return `From the ${numYear + 1} Century`;
    }

}

console.log(centuryFromYear(1905));
console.log(centuryFromYear(1700));
console.log(centuryFromYear(2018));
console.log(centuryFromYear(1501));