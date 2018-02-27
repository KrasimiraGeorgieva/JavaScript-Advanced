let solve = (function () {
    Array.prototype.last = function(){
        return this[this.length - 1];
    };
    Array.prototype.skip = function(n){
        return this.slice(n);
    };
    Array.prototype.take = function(n){
        if (n < 0 && n > this.length){
            return;
        }
        let result = [];
        for (let i = 0; i < n; i++) {
            result.push(this[i]);
        }
        return result;
    };
    Array.prototype.sum = function(){
        let sumElements = 0;
        for (let i = 0; i < this.length; i++) {
            sumElements += this[i];
        }
        return sumElements;
    };
    Array.prototype.average = function(){
        let sum = this.sum();
        return sum/this.length;
    }
})();

