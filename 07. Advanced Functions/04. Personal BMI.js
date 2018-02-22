function solve(name, age, weight, height) {
    let bmiCalc = Math.round(weight / Math.pow(height / 100, 2));
    let status;
    if (bmiCalc < 18.5){
        status = 'underweight';
    } else if(bmiCalc < 25){
        status = 'normal';
    } else if(bmiCalc < 30){
        status = 'overweight';
    } else {
        status = 'obese';
    }

    let patient = {
        name: name,
        personalInfo:{
            age: age,
            weight: weight,
            height: height
        },
        BMI: bmiCalc,
        status: status
    };

    if(status === 'obese'){
        patient['recommendation'] = 'admission required';
    }

    return patient
}

console.log(solve('Peter', 29, 75, 182));
console.log(solve('Honey Boo Boo', 9, 57, 137));