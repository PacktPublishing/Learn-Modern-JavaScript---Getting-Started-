//Function hoisting
test();
function test() {
    console.log("First Test.");
}
test();
function test() {
    console.log("Second Test.");
}
test();