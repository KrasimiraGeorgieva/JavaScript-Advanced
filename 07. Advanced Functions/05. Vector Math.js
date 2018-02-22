let solve = (function() {
return {
    add: function(vect1, vect2){
        return [vect1[0] + vect2[0],vect1[1] + vect2[1]]
    },
    multiply: function(vect1, scalar){
        return [vect1[0] * scalar, vect1[1] * scalar]
    },
    length: function(vect1){
        return Math.sqrt(Math.pow(vect1[0], 2) + Math.pow(vect1[1], 2))
    },
    dot: function(vect1, vect2){
        return vect1[0]* vect2[0] + vect1[1]* vect2[1]
    },
    cross: function(vect1, vect2){
        return vect1[0]* vect2[1] - vect1[1]* vect2[0]
    }
}
})();

console.log(solve.dot([1, 0], [0, -1]));