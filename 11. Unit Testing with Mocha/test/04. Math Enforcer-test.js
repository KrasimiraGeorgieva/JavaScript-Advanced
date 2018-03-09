let expect = require('chai').expect;
const mathEnforcer = require('../04. Math Enforcer');

describe('Math Enforcer Unit Tests', function(){
    describe('addFive', function(){
        it('with a string - should return undefined', function(){
            let result = mathEnforcer.addFive('text');
            expect(result).to.be.undefined;
        });
        it('with positive number - should return number + 5', function(){
            let result = mathEnforcer.addFive(4);
            expect(result).to.be.equal(9,'Add five function did not work correctly');
        });
        it('with negative number - should return number + 5', function(){
            let result = mathEnforcer.addFive(-4);
            expect(result).to.be.equal(1,'Add five function did not work correctly');
        });
        it('with double number - should return number + 5', function(){
            let result = mathEnforcer.addFive(3.14);
            expect(result).to.be.closeTo(8.14, 0.01);
        });

    });
    describe('subtractTen', function(){
        it('with a string - should return undefined', function(){
            let result = mathEnforcer.subtractTen('text');
            expect(result).to.be.undefined;
        });
        it('with positive number - should return number - 10', function(){
            let result = mathEnforcer.subtractTen(14);
            expect(result).to.be.equal(4,'Subtract ten function did not work correctly!');
        });
        it('with negative number - should return number - 10', function(){
            let result = mathEnforcer.subtractTen(-4);
            expect(result).to.be.equal(-14,'Subtract ten function did not work correctly!');
        });
        it('with double number - should return number - 10', function(){
            let result = mathEnforcer.subtractTen(15.14);
            expect(result).to.be.closeTo(5.14, 0.01);
        });

    });

    describe('sum', function(){
        it('first number as a string should return undefined', function(){
            let result = mathEnforcer.sum('k', 9);
            expect(result).to.be.undefined;
        });
        it('second number as a string should return undefined', function(){
            let result = mathEnforcer.sum(5, 'm');
            expect(result).to.be.undefined;
        });
        it('with two positive number should return correct sum', function(){
            let result = mathEnforcer.sum(1, 9);
            expect(result).to.be.equal(10,'Sum did not return correct value!');
        });
        it('with two negative number should return correct sum', function(){
            let result = mathEnforcer.sum(-1, -9);
            expect(result).to.be.equal(-10,'Sum did not return correct value!');
        });
        it('with two floating-point number should return correct sum', function(){
            let result = mathEnforcer.sum(1.01, 9.09);
            expect(result).to.be.equal(10.10,'Sum did not return correct value!');
        });
    });
});