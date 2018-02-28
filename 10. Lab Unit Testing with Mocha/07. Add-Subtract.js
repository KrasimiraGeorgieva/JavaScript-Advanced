// http://prntscr.com/ikh38y
//http://prntscr.com/ikh3ef
    //http://prntscr.com/ikh3zb
//http://prntscr.com/ikh4go
// http://prntscr.com/ikh5gx
function createCalculator() {
    let value = 0;
    return {
        add: function(num) { value += Number(num); },
        subtract: function(num) { value -= Number(num); },
        get: function() { return value; }
    }
}

module.exports = createCalculator;
