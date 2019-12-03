//Create a function that will generate a random number between the numbers provided.
var randomNumber = function(min, max) {
    if (min === undefined || max === undefined) {
        return;
    }

    return Math.floor(Math.random() * (1 + max - min) + min);
};




var randNum = randomNumber(12, 20);
console.log(randNum);


//First we did this:
// var randomNumber = function(min, max) {
//     var init = Math.random(),
//         rand;

//     rand = init * (max - min) + min;

//     console.log(rand);
// };

//Then we modified with this
// rand = init * (1+ max - min) + min;

// console.log(Math.floor(rand));

