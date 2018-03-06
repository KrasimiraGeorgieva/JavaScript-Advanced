function solve() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

        toString() {
            let className = this.constructor.name;
            return `${className} (name: ${this.name}, email: ${this.email})`;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }

        toString() {
            let parentStr = super.toString().slice(0, -1);
            return parentStr + `, subject: ${this.subject})`;
        }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }

        toString() {
            let parentStr = super.toString().slice(0, -1);
            return parentStr + `, course: ${this.course})`;
        }
    }

    return {Person, Teacher, Student};
}

let obj = solve();
let Person = obj.Person;
let Teacher = obj.Teacher;
let Student = obj.Student;

let p = new Person('Mincho', 'mincho@abv.bg');
console.log(p.toString());
let t = new Teacher('Gosho', 'gosh@gosh.com', 'Graphics');
console.log(t + '');
let s = new Student('Stamat', 'stamcho@stamishteto.bg', '666');
console.log(s);

