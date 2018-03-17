const Sumator = require('../02. Sumator Class');
const expect =require('chai').expect;

describe("Sumator Unit Test", function(){
    let sumator;
    beforeEach(function(){
        sumator = new Sumator;
    });

    describe("check if function exist", function() {
        it('data is not undefined', function () {
            expect(sumator.data !== undefined).to.be.equal(true)
        });

        it('check if add func exists', function(){
           expect(Sumator.prototype.hasOwnProperty('add')).to.be.equal(true);
        });

        it('check if sumNums func exists', function(){
            expect(Sumator.prototype.hasOwnProperty('sumNums')).to.be.equal(true);
        });

        it('check if removeByFilter func exists', function(){
            expect(Sumator.prototype.hasOwnProperty('removeByFilter')).to.be.equal(true);
        });

        it('check if toString func exists', function(){
            expect(Sumator.prototype.hasOwnProperty('toString')).to.be.equal(true);
        });

        it("test if data length is empty", function () {
            expect(sumator.data.length).to.be.equal(0);
        });
    });

    describe("add func test", function(){
        it("add only number", function(){
            sumator.add(5);
            sumator.add(4);
            sumator.add(3);

            expect(sumator.data.join(', ')).to.be.equal('5, 4, 3');
        });
        it("add only strings", function(){
            sumator.add('Kiro');
            sumator.add('Ivan');
            sumator.add('Gosho');

            expect(sumator.data.join(', ')).to.be.equal('Kiro, Ivan, Gosho');
        });
        it("add only strings", function(){
            sumator.add({name:'Ivan'});
            sumator.add({});
            expect(sumator.data.join(', ')).to.be.equal('[object Object], [object Object]');
        });
        it("add only strings", function(){
            sumator.add({name:'Ivan'});
            sumator.add(4);
            sumator.add('Gosho');
            expect(sumator.data.join(', ')).to.be.equal('[object Object], 4, Gosho');
        });
    });

    describe("sum nums", function() {
        it("sum only number", function () {
            sumator.add(5);
            sumator.add(4);
            sumator.add(3);

            expect(sumator.sumNums()).to.be.equal(12);
        });
        it("sum all", function () {
            sumator.add('Pesho');
            sumator.add({});
            sumator.add({name: 'Minka'});

            expect(sumator.sumNums()).to.be.equal(0);
        });
        it("sum all", function () {
            sumator.add('Pesho');
            sumator.add({});
            sumator.add(2);
            sumator.add({});
            sumator.add(3);

            expect(sumator.sumNums()).to.be.equal(5);
        });
    });

    describe("remove by filter", function() {
        it("removes all odd numbers", function () {
            for (let i = 0; i <= 10; i++) {
                sumator.add(i);
            }
            sumator.removeByFilter((x) => x % 2 !== 0);
            expect(sumator.data.join(', ')).to.be.equal('0, 2, 4, 6, 8, 10');
        });
        it("removes all odd numbers", function () {
            for (let i = 0; i <= 5; i++) {
                sumator.add(i);
            }
            sumator.removeByFilter((x) => x > 5);
            expect(sumator.data.join(', ')).to.be.equal('0, 1, 2, 3, 4, 5');
        });
        it("throws exception", function () {
            for (let i = 0; i <= 5; i++) {
                sumator.add(i);
            }
            expect(() => sumator.removeByFilter(undefined)).to.throw();
        });
    });

    describe("toString func", function() {
        it("with items in arr", function () {
            sumator.add(5);
            sumator.add('Pesho');
            expect(sumator.toString()).to.be.equal('5, Pesho');
        });
        it("with items in arr", function () {
            expect(sumator.toString()).to.be.equal('(empty)');
        });
    });
});