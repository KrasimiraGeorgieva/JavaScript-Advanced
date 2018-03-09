let expect = require('chai').expect;
const lookupChar = require('../03. Char Lookup');

describe('lookupChar tests', function(){
    // return undefined
   it('with a non-string first parameter, should return undefined', function(){
      expect(lookupChar(5,0)).to.be.equal(undefined, 'The function did not return the correct result!');
   }) ;
    it('with a non-number second parameter, should return undefined', function(){
        expect(lookupChar('minka','goshko')).to.be.equal(undefined, 'The function did not return the correct result!');
    }) ;
    it('with a floating point number second parameter, should return undefined', function(){
        expect(lookupChar('minka',3.16)).to.be.equal(undefined, 'The function did not return the correct message!');
    }) ;
    // return empty string
    it('with an incorrect index value, should return incorrect index', function(){
        expect(lookupChar('minka',10)).to.be.equal('Incorrect index', 'The function did not return the correct value!');
    }) ;
    it('with a negative index value, should return incorrect index', function(){
        expect(lookupChar('goshko',-1)).to.be.equal('Incorrect index', 'The function did not return the correct' +
            ' value!');
    }) ;
    it('with a index value equal to string length, should return incorrect index', function(){
        expect(lookupChar('goshko',6)).to.be.equal('Incorrect index', 'The function did not return the correct' +
            ' value!');
    }) ;
    // return a correct result
    it('with correct parameters, should return correct value', function(){
        expect(lookupChar('goshko',0)).to.be.equal('g', 'The function did not return the correct' +
            ' result!');
    }) ;
    it('with correct parameters, should return correct value', function(){
        expect(lookupChar('goshko',4)).to.be.equal('k', 'The function did not return the correct' +
            ' result!');
    }) ;
});