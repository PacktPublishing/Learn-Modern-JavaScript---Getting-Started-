
var customer = {
    address0: "Ty Smith",
    address1: "150 South Main",
    address2: "Somewhere, MT 00034"
};

var addr = "";
for (let i = 0; i < 3; i++) {
    addr += customer["address" + i] + '\n';
}

console.log(addr);