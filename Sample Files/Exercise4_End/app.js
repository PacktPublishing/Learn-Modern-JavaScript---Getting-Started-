//Write conditionals to sort three numbers (6, -5, 2) largest to smallest. Output the results to the console.
var num1 = 6,
    num2 = -5,
    num3 = 2;

if (num1 > num2 && num1 > num3) {
    if (num2 > num3) {
        console.log(num1 + " " + num2 + " " + num3);
    } else {
        console.log(num1 + " " +  num3 + " " + num2);
    }
} else if (num2 > num1 && num2 > num3) {
    if (num1 > num3) {
        console.log(num2 + " " + num1 + " " + num3);
    } else {
        console.log(num2 + " " +  num3 + " " + num1);
    }
} else if (num3 > num1 && num3 > num2) {
    if (num1 > num2) {
        console.log(num3 + " " + num1 + " " + num2);
    } else {
        console.log(num3 + " " +  num2 + " " + num1);
    }
}