/*
40. Deposit Profit

-You have deposited a specific amount of dollars into your bank account. Each year, your balance increases at the same growth rate.
Find out how long it would take for your balance to pass a specific threshhold with the assumption that you don't make any additional deposits.

EXAMPLE:

for deposit = 100, rate = 20, and threshhold = 170, the output should be 3.

Year 0 = 100.
year 1 = 120.
year 2 = 144.
year 3 = 172.8

Thus it will take 3 years for your balance to pass the threshold.

*/


function depositProfit(deposit, rate, threshold){

    let total = deposit;
    let years = 0;

    while (total < threshold){
        total += (rate / 100) * total;
        years++;
    }
    return years;

}

console.log(depositProfit(100, 20, 170));
console.log(depositProfit(100, 7, 1000000));
console.log(depositProfit(200, 2, 50000));