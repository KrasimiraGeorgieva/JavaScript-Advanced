let expect = require('chai').expect;
const isOddOrEven = require('../02. Even Or Odd');
const assert = require('assert');

describe('Is Odd or Even', function () {
    it('should return undefined for number', function (){
        expect(isOddOrEven(12)).to.be.equal(undefined, "Function did not return the correct result!");
    });
    it('should return undefined for object', function (){
        expect(isOddOrEven({name: 'pesho'})).to.be.equal(undefined, "Function did not return the correct result!");
    });
    it('should return correct result for even length', function (){
        assert.equal(isOddOrEven('pe6o'),'even', "Function did not return the correct result!");
    });
    it('should return undefined for odd length', function (){
        expect(isOddOrEven('pesho')).to.be.equal('odd', "Function did not return the correct result!");
    });
    it('should return correct value', function (){
        expect(isOddOrEven('asd')).to.be.equal('odd', "Function did not return the correct result!");
    });
});