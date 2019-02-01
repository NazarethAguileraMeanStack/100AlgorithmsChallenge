/*
52. Fermactor

-Fermat's factorization method is: if a * b = n, then there exists some c such that c^2 - d^2. Your goals is to
return for given n such c and d as an array. Since we want c and d to be uniquely determined, in all test cases n
is a semiprime number.

EXAMPLE:

n= 15; output should be [4,1]


*/

function fermactor(num){

    for (let i = 0; i < num; i++){
        for(let j = 1; j < i; j++){
            let total = Math.pow(i, 2) - Math.pow(j, 2);
            if (total == num){
                return [i, j];
            }
        }
    }

}

console.log(fermactor(15));