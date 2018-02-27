function solve(car) {
    let carObj = {};
    let engine;

    if(car.power <= 90){
        engine = {
            power: 90,
            volume: 1800
        }
    }else if (car.power <= 120){
        engine = {
            power: 120,
            volume: 2400
        }
    }else {
        engine = {
            power: 200,
            volume: 3500
        }
    }
    carObj.model = car.model;
    carObj.engine = engine;

    carObj.carriage = {
        type: car.carriage,
        color: car.color
    };

    let wheels = [];
    if( car.wheelsize % 2 === 0){
        car.wheelsize--;
    }

    for (let i = 0; i < 4; i++) {
        wheels.push(car.wheelsize)
    }

    carObj.wheels = wheels;
    return carObj;
}

console.log(solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14 }
));