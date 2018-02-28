let expect = require('chai').expect;
let rgbToHexColor = require('../06. RGB to Hex');

describe('RGB to Hex tests', function () {
    it("Should return #FF9EAA for (255, 158, 170)", function () {
        expect(rgbToHexColor(255, 158, 170)).to.be.equal('#FF9EAA');
    });
    it("Should pad values with zeroes", function () {
        expect(rgbToHexColor(12,13,14)).to.be.equal('#0C0D0E');
    });
    it("Should work at lower limit", function () {
        expect(rgbToHexColor(0, 0, 0)).to.be.equal('#000000');
    });
    it("Should work at upper limit", function () {
        expect(rgbToHexColor(255, 255, 255)).to.be.equal('#FFFFFF');
    });

    it("Should return undefined for (-1, 0, 0)", function () {
        expect(rgbToHexColor(-1, 0, 0)).to.be.equal(undefined);
    });
    it("Should return undefined for (0, -1, 0)", function () {
        expect(rgbToHexColor(0, -1, 0)).to.be.equal(undefined);
    });
    it("Should return undefined for (0, 0, -1)", function () {
        expect(rgbToHexColor(0, 0, -1)).to.be.equal(undefined);
    });
    it("Should return undefined for (256, 0, 0)", function () {
        expect(rgbToHexColor(256, 0, 0)).to.be.equal(undefined);
    });
    it("Should return undefined for (0, 256, 0)", function () {
        expect(rgbToHexColor(0, 256, 0)).to.be.equal(undefined);
    });
    it("Should return undefined for (0, 0, 256)", function () {
        expect(rgbToHexColor(0, 0, 256)).to.be.equal(undefined);
    });
});
