const expect = require('chai').expect;
const Console = require('../specialConsole');

describe('Console tests', function (){
    it('Should return string', function(){
        expect(Console.writeLine('test')).to.be.equal('test')
    });
    it('Should return object', function(){
        let obj = {name: 'Pesho'};
        expect(Console.writeLine(obj)).to.be.equal(JSON.stringify(obj))
    });

    it('Should throw Error, if first is not a string', function(){
        expect(() => {Console.writeLine([], 1, 2)}).to.throw(TypeError)
    });
    it('Should throw Error, if number of parameters are different  from the number of placeholders', function(){
        expect(() => {Console.writeLine('{0}', 1, 2)}).to.throw(RangeError)
    });
    it('Should throw Error, if parameter index is incorrect', function(){
        expect(() => {Console.writeLine('{5}', 1, 2)}).to.throw(RangeError)
    });
    it('Should throw Error, if parameter index is incorrect', function(){
        expect(() => {Console.writeLine('{15}', 1, 'Ivan')}).to.throw(RangeError)
    });
    it('Should throw Error, if parameter index is incorrect', function(){
        expect(Console.writeLine('{0}, this is {1}', 'Gosho', 'Minka')).to.be.equal('Gosho, this is Minka')
    });
});