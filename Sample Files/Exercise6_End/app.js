//Write a loop that will display any number between 1 - 100 that is a multiple of both 3 and 5. 
var mod3, mod5;
//loop through 1 - 100
for (var i = 1; i <= 100; i++) {
    //Get the mod of 3
    mod3 = i % 3;
    //Get the mod of 5
    mod5 = i % 5;
    //Are both equal 0? If so display number.
    if (mod3 === 0 && mod5 === 0) {
        console.log(i);
    }
}