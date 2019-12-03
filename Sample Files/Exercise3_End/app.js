//Find out how many hours have passed since 1/1/2000.
var date2000 = new Date('1/1/2000'),
    curDate = new Date(),
    milliseconds, seconds, minutes, hours;

milliseconds = curDate.getTime() - date2000.getTime();
seconds = milliseconds/1000;
minutes = seconds/60;
hours = minutes/60;
//Print it to the console. Don't display any value past decimal point
console.log(Math.floor(hours));