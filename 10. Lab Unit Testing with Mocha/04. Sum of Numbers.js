function sum(arr) {
    let sum = 0;
    for (a of arr)
        sum += Number(a);
    return sum;
}

module.exports = sum;