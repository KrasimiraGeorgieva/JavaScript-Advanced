class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return this.radius * 2;
    }

    set diameter(newDiameter) {
        this.radius = newDiameter / 2 ;
    }

    get area(){
        return Math.PI * this.radius * this.radius;
    }
}

let c = new Circle(10);
c.diameter = 10;
console.log(c.area);
c.diameter = 5;
console.log(c.diameter);