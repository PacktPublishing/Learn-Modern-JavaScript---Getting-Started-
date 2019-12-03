
var arr = ["Steve", "Lynette", "Max"];

var checkName = function(name) {
    if (arr.includes(name)) {
        console.log(name + " is already included.");
    } else {
        arr.push(name);
        console.log(name + " was added.");
    }
};
