let expect = require('chai').expect;
const createCalculator = require('../07. Add-Subtract');

describe('Calculator maker', function () {
    let calc;
    beforeEach(function(){
        calc = createCalculator();
    });
    it('Should return an object', function () {
        expect(typeof calc).to.be.equal('object');
    });
    it('Should return add value', function (){
        calc.add(-10);
        calc.add(11);
        expect(calc.get()).to.be.equal(1);
    });
    it('Should return subtract', function () {
        calc.subtract(-1);
        calc.subtract(2);
        expect(calc.get()).to.be.equal(-1);
    });
    it('Should return 0 for calc.get()', function () {
        expect(calc.get()).to.be.equal(0);
    });
    it('Should return NuN for add string', function () {
        calc.add('hello');
        expect(calc.get()).to.be.NaN;
    });
    it("Should return 1 for add '1'", function () {
        calc.add('1');
        expect(calc.get()).to.be.equal(1);
    });
});
