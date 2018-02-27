function solve() {
    let obj = Object.create({});
        obj.extend = function(template){
            for (let propOfParent in template) {
                if(typeof template[propOfParent] === 'function'){
                    Object.getPrototypeOf(obj)[propOfParent] = template[propOfParent];
                }else {
                    obj[propOfParent] = template[propOfParent];
                }
            }
        };
    return obj;
}

let template = {
    extensionMethod: function () {
        console.log('from extensionMethod');
    },
    extensionProp: 'Test'

};
let myObj = solve();
myObj.extend(template);
console.log(myObj);
console.log(myObj.__proto__);