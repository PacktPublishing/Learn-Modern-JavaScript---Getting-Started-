
var sum = function(num1, num2) {
     return num1 + num2;
};
var sum1 = (num1, num2) => num1 + num2;

var funct1 = num => num * num;

var funct2 = () => 100;

var percent = (num, percent) => {
     percent = percent / 100;
     return num * percent;
};

console.log(sum(5, 6));

console.log(sum1(5, 6));

console.log(funct1(10));

console.log(funct2());

console.log(percent(100, 10));