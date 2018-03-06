let Person = require('./01. Person and Teacher');

function extendClass(ClassToExtend) {
    ClassToExtend.prototype.species = 'Human';
    ClassToExtend.prototype.toSpeciesString = function() {
        return `I am a ${this.species}. ${this.toString()}`
    }
}

extendClass(Person);
let p = new Person('Ivan', 'mail');
console.log(p);
console.log(p.species);
console.log(p.toSpeciesString());
