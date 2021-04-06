const readlineSync = require('readline-sync');


function gcd(a,b){
    if(a == 0)
    return b;
    if(b == 0)
    return a;

    if(a == b)
        return a;
    
    if(a > b)
        return gcd(a-b, b);
        return gcd(a, b-a);
}

let a = readlineSync.question('Enter 1st Number: ');
let b = readlineSync.question('Enter 2st Number: ');

console.log(gcd(a,b));