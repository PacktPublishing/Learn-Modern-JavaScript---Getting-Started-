//Find the multiples of 6 between 1 and 100
for (var i = 1; i < 101; i++) {
    let mod = i % 6;
    if (mod === 0) {
        console.log(i + " is a multiple of 6.");
    }
}