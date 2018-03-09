const $ = require('jquery');
const nuke = require('../06. ArmageDOM');

const expect = require('chai').expect;
// http://prntscr.com/ilj1z2

describe('Armagedom Unit Tests', function () {
    //let selector = $('#target');
    let targetHtml;
    beforeEach(function(){
        document.body.innerHTML = `<body>
            <div id="target">
                <div class="nested target">
                    <p>This is some text</p>
                </div>
                <div class="target">
                    <p>Empty div</p>
                </div>
                <div class="inside">
                    <span class="nested">Some more text</span>
                    <span class="target">Some more text</span>
                </div>
            </div>
            </body>`;
        targetHtml = $('#target');
    });
    //http://prntscr.com/iljaj8

    /*describe('Test', () => {
        if ('should not modify DOM if both selector are equal', () => {
                let selector1 = $('#target');
                // http://prntscr.com/ilj4zt
                let originalHtml = selector.html();
                nuke(selector1, selector1);
                expect(originalHtml).to.be.equal(selector.html())
            }) ;
        //http://prntscr.com/ilj6a4

        if ('should not modify DOM if first is invalid', () => {
                let selector1 = $('#target3asd');
                // http://prntscr.com/ilj708
                let originalHtml = selector.html();
                nuke(selector1, selector1);
                expect(originalHtml).to.be.equal(selector.html())
            }) ;

        //http://prntscr.com/ilj8g2
        //http://prntscr.com/ilj8pn
        //http://prntscr.com/ilj9cy
        //
        // http://prntscr.com/iljc94
        // http://prntscr.com/iljcus
        // http://prntscr.com/iljdfu
        //http://prntscr.com/iljfkz
        //http://prntscr.com/iljfyz
        //http://prntscr.com/iljg3x

        //http://prntscr.com/iljhxp
        //http://prntscr.com/iljeyu
    })*/

    it('with valid and with invalid selector, should not remove', function(){
        let selector1 = $('.inside');
        let selector2 = 2;
        let oldHtml = targetHtml.html();
        nuke(selector1,selector2);
        expect(targetHtml.html()).to.be.equal(oldHtml, 'HTML has changed!');
    });
    it('with two equal selectors, should not remove', function(){
        let selector1 = $('.nested');
        let oldValue = targetHtml.html();
        nuke(selector1,selector1);
        expect(targetHtml.html()).to.be.equal(oldValue, 'HTML has changed!');
    });
    it('with two valid and different selectors, should not remove', function(){
        let selector1 = $('.nested');
        let selector2 = $('.target');
        let oldValue = targetHtml.html();
        nuke(selector1,selector2);
        expect(targetHtml.html()).to.not.be.equal(oldValue, 'HTML did not change!');
    });
    it('with two valid selectors should not remove anything', function(){
        let selector1 = $('.nested');
        let selector2 = $('.inside');
        let oldValue = targetHtml.html();
        nuke(selector1,selector2);
        expect(targetHtml.html()).to.be.equal(oldValue, 'HTML did not change!');
    });
});