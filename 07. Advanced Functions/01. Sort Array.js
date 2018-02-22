function sortArr(inputArr, sortMethod) {
    let ascending = function (a, b){
        return a - b;
    };
    let descending = function (a, b){
      return b - a;
    };

    let sortingObj = {
        asc: ascending,
        desc: descending
    };

    return inputArr.sort(sortingObj[sortMethod]);

}

console.log(sortArr([14, 7, 17, 6, 8], 'asc'));
console.log(sortArr([14, 7, 17, 6, 8], 'desc'));
