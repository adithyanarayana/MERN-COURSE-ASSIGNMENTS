const readlineSync = require('readline-sync');

console.log("CFC Campus Leader");
let credits = readlineSync.question("Input Credits: ");
if(credits >= 7500){
    console.log("Tera Leader");
}
else if (credits >= 6000){
    console.log("Gega Leader");
}
else if (credits >= 4500){
    console.log("Mega Leader");
}
else{
    console.log("Rising Star");
}