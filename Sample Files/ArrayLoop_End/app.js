//Determine an average of all the grades
var grades = [97, 32, 65, 88,, 45, 78, 76, 83, 67, 97];

var total = 0,
    ave = 0;

for (var i = 0; i < grades.length; i++) {
    if (grades[i] === undefined) {
        continue;
    }
    total += grades[i];
}

ave = total / grades.length;

console.log("The average grade is: " + ave);


