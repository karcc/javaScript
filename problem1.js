var sumOfMultiples = function totalSum() {
    for (var i = 0; i < 1001; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum +=i;
        }
        return sum;
    };
    console.log(sumOfMultiples());