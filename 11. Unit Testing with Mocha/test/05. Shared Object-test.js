let expect = require('chai').expect;
const jsdom = require('jsdom-global')();
const $ = require('jquery');
const sharedObject = require('../05. Shared Object');

describe('Share Object Unit Tests', function () {
    describe('Initial value tests', function () {
        it('test name initial value', function () {
            expect(sharedObject.name).to.be.null;
        });
        it('test income initial value', function () {
            expect(sharedObject.income).to.be.null;
        });
    });
    describe('Change name tests', function () {
        it('with empty string name should be null', function () {
            sharedObject.changeName('');
            expect(sharedObject.name).to.be.null;
        });
        it('with a non-empty string name should not be null', function () {
            sharedObject.changeName('Pesho');
            expect(sharedObject.name).to.be.equal('Pesho', 'Name did not change correctly!');
        });

        describe('Name input tests', function () {
            it('with empty string name should be previous', function () {
                sharedObject.changeName('Gosho');
                sharedObject.changeName('');
                let nameTxtVal = $('#name');
                expect(nameTxtVal.val()).to.be.equal('Gosho', 'Name did not change correctly!');
            });
            it('with a non-empty string name should not be null', function () {
                sharedObject.changeName('Pesho');
                let nameTxtVal = $('#name');
                expect(nameTxtVal.val()).to.be.equal('Pesho', 'Name did not change correctly!');
            });
        });
    });
    describe('Change Income', function () {

        it('with a string should stay null', function () {
            sharedObject.changeIncome('h');
            expect(sharedObject.income).to.be.null;
        });
        it('with a positive number should change correctly', function () {
            sharedObject.changeIncome(5);
            expect(sharedObject.income).to.be.equal(5, 'Income did not change  correctly!');
        });
        it('with floating-point number', function () {
            sharedObject.changeIncome(20);
            sharedObject.changeIncome(4.22);
            expect(sharedObject.income).to.be.equal(20, 'Income did not change  correctly!');
        });
        it('with negative number', function () {
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(-2);
            expect(sharedObject.income).to.be.equal(5, 'Income did not change  correctly!');
        });
        it('with zero', function () {
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(0);
            expect(sharedObject.income).to.be.equal(5, 'Income did not change  correctly!');
        });

        describe('Income input', function () {
            it('with a string should not change correctly', function () {
                sharedObject.changeIncome(5);
                sharedObject.changeIncome('h');
                let incomeTxtVal = $('#income');
                expect(incomeTxtVal.val()).to.be.equal('5', 'Income input did not change  correctly!');
            });
            it('with a positive number should not change correctly', function () {
                sharedObject.changeIncome(5);
                let incomeTxtVal = $('#income');
                expect(incomeTxtVal.val()).to.be.equal('5', 'Income input did not change  correctly!');
            });
            it('with a floating-point number should not change correctly', function () {
                sharedObject.changeIncome(5);
                sharedObject.changeIncome(3.14);
                let incomeTxtVal = $('#income');
                expect(incomeTxtVal.val()).to.be.equal('5', 'Income input did not change  correctly!');
            });
            it('with a negative number should not change correctly', function () {
                sharedObject.changeIncome(5);
                sharedObject.changeIncome(-5);
                let incomeTxtVal = $('#income');
                expect(incomeTxtVal.val()).to.be.equal('5', 'Income input did not change  correctly!');
            });
            it('with zero should not change correctly', function () {
                sharedObject.changeIncome(5);
                sharedObject.changeIncome(0);
                let incomeTxtVal = $('#income');
                expect(incomeTxtVal.val()).to.be.equal('5', 'Income input did not change  correctly!');
            });
        });
    });
    describe('Update name', function () {
        it('with an empty should not change property', function () {
            sharedObject.changeName('Minka');
            let nameElement = $('#name');
            nameElement.val('');
            sharedObject.updateName();
            expect(sharedObject.name).to.be.equal('Minka', 'Name did not update correctly!');
        });
        it('with an non-empty should change property', function () {
            sharedObject.changeName('Minka');
            let nameElement = $('#name');
            nameElement.val('Penka');
            sharedObject.updateName();
            expect(sharedObject.name).to.be.equal('Penka', 'Name did not update correctly!');
        });
    });
    describe('Update income', function () {
        it('with a string should not change income property', function () {
            sharedObject.changeIncome(2);
            let incomeElement = $('#income');
            incomeElement.val('income');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(2, 'Income did not update correctly!');
        });
        it('with a floating-point number should not change income property', function () {
            sharedObject.changeIncome(2);
            let incomeElement = $('#income');
            incomeElement.val('3.14');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(2, 'Income did not update correctly!');
        });
        it('with a negative number should not change income property', function () {
            sharedObject.changeIncome(2);
            let incomeElement = $('#income');
            incomeElement.val('-5');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(2, 'Income did not update correctly!');
        });
        it('with a zero should not change income property', function () {
            sharedObject.changeIncome(2);
            let incomeElement = $('#income');
            incomeElement.val('0');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(2, 'Income did not update correctly!');
        });
        it('with a positive integer should change income property', function () {
            sharedObject.changeIncome(2);
            let incomeElement = $('#income');
            incomeElement.val('5');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(5, 'Income did not update correctly!');
        });
    });
});