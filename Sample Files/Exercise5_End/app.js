//Write a loop that will display a fibonacci sequence starting with 0 and 1 until the final number is less than or equal to 1000. A fibonancci sequence is where each number is equal to the sum of the previous two numbers (e.g. 0, 1, 1, 2, 3, 5 ...).

//Store the results in a sequence. Add two numbers. Assign results to the sequence. Figure out next set of numbers.

var fibSeq = "0, ",
    num1 = 0,
    num2 = 1,
    newNum = 1;

while (newNum <= 1000) {
    fibSeq += newNum + ", ";
    newNum = num1 + num2;
    num1 = num2;
    num2 = newNum;
}

console.log(fibSeq.slice(0, fibSeq.length - 2));