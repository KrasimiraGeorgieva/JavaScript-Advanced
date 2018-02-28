let expect = require('chai').expect;
const isSymmetric = require('../05. Check for Symmetry');

describe('Symmetry test', function () {
    describe('General tests', function () {
        it('Should be a function', function () {
            expect(typeof isSymmetric).to.be.equal('function');
        });
    });

    describe('Value test', function () {
        it('Should return true [1, 2, 3, 3, 2, 1]', function () {
            expect(isSymmetric([1, 2, 3, 3, 2, 1])).to.be.equal(true);
        });
        it('Should return false [1, 2, 3, 4, 2 ,1]', function () {
            expect(isSymmetric([1, 2, 3, 4, 2, 1])).to.be.equal(false);
        });
        it('Should return true [-1, 2, -1]', function () {
            expect(isSymmetric([-1, 2, -1])).to.be.equal(true);
        });
        it('Should return false [-1, 2, 1]', function () {
            expect(isSymmetric([-1, 2, 1])).to.be.equal(false);
        });
        it('Should return false [1, 2]', function () {
            expect(isSymmetric([1, 2])).to.be.equal(false);
        });
        it('Should return true [1]', function () {
            expect(isSymmetric([1])).to.be.equal(true);
        });
        it("Should return true ['test',1,{x:2},new Date(),1,{x:2},'test']", function () {
            expect(isSymmetric(['test', {x: 2}, 1, new Date(), 1, {x: 2}, 'test'])).to.be.equal(true);
        });
        it("Should return true ['test',1,{x:2},new Date(),1,{x:2},'test']", function () {
            expect(isSymmetric(['test', 1, {x: 2}, new Date(), 1, {x: 2}, 'test'])).to.be.equal(false);
        });
        it('Should return false for [udf, udf]', function () {
            expect(isSymmetric([NaN, NaN])).to.be.equal(true);
        });
        it('Should return false for 1,2,2,1-not array', function(){
            expect(isSymmetric(1,2,2,1)).to.be.equal(false);
        });
        it('Should return false for 1,2,1-not array', function(){
            expect(isSymmetric(1,2,1)).to.be.equal(false);
        });
    });
});