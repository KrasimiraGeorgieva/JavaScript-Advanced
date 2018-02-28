let expect = require('chai').expect;

function sum(arr) {
    let sum = 0;
    for (num of arr)
        sum += Number(num);
    return sum;
}

describe('Group', function(){
    it('Name of the test', function(){
        expect(sum([1, 2])).to.be.equal(3)
    })
});

// cd "10. Lab Unit Testing with Mocha" команда за старт през терминала


// http://prntscr.com/ikfufa
// http://prntscr.com/ikfvqs