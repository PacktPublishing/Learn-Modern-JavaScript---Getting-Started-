//Remove all duplicates from this array
var fruits = ["banana", "kiwi", "mango", "kiwi", "apple", "kiwi", "pear", "banana", "apple"],
    compareVal;

//sort the array
fruits.sort();
//console.log(fruits.toString());
//iterate backwards through the array comparing values
for (i = fruits.length - 1;i >= 0;i--) {
    compareVal = fruits[i];
    if (compareVal === fruits[i - 1]) {
        //console.log(compareVal, fruits[i - 1]);
        fruits.splice(i, 1);
    }
}

console.log("New Array: " + fruits.toString());