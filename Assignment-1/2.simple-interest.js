const readlineSync = require('readline-sync');

let amount = readlineSync.question('Enter amount: ');
let rate = readlineSync.question('Enter rate: ');
let time = readlineSync.question('Enter time: ');

let simpleInterest = amount*rate*time/100;
console.log("SimpleInterest = " + simpleInterest);