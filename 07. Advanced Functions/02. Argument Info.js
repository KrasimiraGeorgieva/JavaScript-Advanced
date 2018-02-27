function result() {
    let summary = {};
    for (let i = 0; i < arguments.length; i++) {
        let argsValue = arguments[i];
        //let type = typeof obj;
        console.log(typeof argsValue + ': ' + argsValue);

        if (!summary[typeof argsValue]) {
            summary[typeof argsValue] = 1;
        } else {
            summary[typeof argsValue]++;
        }
    }
    let sortedType = [];
    for (let currentType in summary) {
        sortedType.push([currentType, summary[currentType]]);
    }

    sortedType = sortedType.sort((a, b) => {
        return b[1] - a[1]
    });
    for (let s of sortedType) {
        console.log(`${s[0]} = ${s[1]}`);
    }

}

result('cat', 42, function () {
    console.log('Hello world!');
});