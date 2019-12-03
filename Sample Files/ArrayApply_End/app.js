//Use the date object and print out the day of the week
var date = new Date(),
    day = date.getDay(),
    daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

console.log("Today is " + daysOfWeek[day]);
