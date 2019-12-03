//create date object
var date = new Date(),
    day = date.getDate(),
    month = date.getMonth(),
    year = date.getFullYear();
//print date in format day/month/year
month++;
// console.log(`${day}/${month}/${year}`);
console.log(day + "/" + month + "/" + year);