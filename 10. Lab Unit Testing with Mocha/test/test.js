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
