let expect = require('chai').expect;
const sum = require('../04. Sum of Numbers');

describe('Sum', function(){
    it('Should return 3[1, 2]', function(){
        expect(sum([1, 2])).to.be.equal(3)
    });
    it('Should return 0 []', function(){
        expect(sum([])).to.be.equal(0)
    });
    it('Should return 1[1]', function(){
        expect(sum([1])).to.be.equal(1)
    });
    it('Should return 3.15[-1,3.15, 1]', function(){
        expect(sum([-1,3.15, 1])).to.be.equal(3.15)
    });
    it('Should return NaN string', function(){
        expect(sum('test')+'').to.be.equal('NaN')
    });
    it('Should return NaN string', function(){
        expect(sum('test')).to.be.NaN
    });
    /*it('Should return NaN object', function(){
        expect(sum({})).to.throw(TypeError)
    });*/
});