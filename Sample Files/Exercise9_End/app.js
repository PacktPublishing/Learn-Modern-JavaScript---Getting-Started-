//Create an arrow function that will accept a number and return the number with an indication of whether it is Odd or Even. See if you can define the entire function on a single line using the ? : conditional operator.

var oddEven = (num) => (num % 2) === 0 ? num + " is Even" : num + " is Odd";

console.log(oddEven(6));

console.log(oddEven(7));