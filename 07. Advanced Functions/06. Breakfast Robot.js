function prepareBreakfast() {
    let ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    let meals = {
        apple: {protein: 0, carbohydrate: 1, fat: 0, flavour: 2},
        coke: {protein: 0, carbohydrate: 10, fat: 0, flavour: 20},
        burger: {protein: 0, carbohydrate: 5, fat: 7, flavour: 3},
        omelet: {protein: 5, carbohydrate: 0, fat: 1, flavour: 1},
        cheverme: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10},
    };

    let commands = {
        restock: (product, quantity) => {
            ingredients[product] += Number(quantity);
            return 'Success';
        },
        prepare: (meal, quantity) => {
            try {
                validateIngredientsQuantity();
                countDownIngredients();
                return 'Success';
            } catch(e){
                return e.message;
            }

            function countDownIngredients(){
                ingredients.protein -= meals[meal].protein * quantity;
                ingredients.carbohydrate -= meals[meal].carbohydrate * quantity;
                ingredients.fat -= meals[meal].fat * quantity;
                ingredients.flavour -= meals[meal].flavour * quantity;
            }

            function validateIngredientsQuantity(){
                if(meals[meal].protein * quantity > ingredients.protein){
                    throw new Error(`Error: not enough protein in stock`)
                }else if(meals[meal].carbohydrate * quantity > ingredients.carbohydrate){
                    throw new Error(`Error: not enough carbohydrate in stock`)
                }else if (meals[meal].fat * quantity > ingredients.fat){
                    throw new Error(`Error: not enough fat in stock`)
                }else if(meals[meal].flavour * quantity > ingredients.flavour){
                    throw new Error(`Error: not enough flavour in stock`)
                }
            }
        },
        report: () => `protein=${ingredients.protein} carbohydrate=${ingredients.carbohydrate} fat=${ingredients.fat} `+
        `flavour=${ingredients.flavour}`
    };


    return (input) => {
        input = input.split(/ /);
        return commands[input.shift()](...input);
    }

}

let manager = prepareBreakfast();
/*console.log(manager("restock flavour 50")); // Success
console.log(manager("prepare coke 4"));     // Error: not enough carbohydrate in stock
console.log(manager("report"));*/

let expectationPairs = [
    ['restock protein 100', 'Success'],
    ['restock carbohydrate 100', 'Success'],
    ['restock fat 100', 'Success'],
    ['restock flavour 100', 'Success'],
    ['report', 'protein=100 carbohydrate=100 fat=100 flavour=100'],
    ['prepare omelet 2', 'Success'],
    ['report', 'protein=90 carbohydrate=100 fat=98 flavour=98'],
    ['prepare omelet 1', 'Success'],
    ['report', 'protein=85 carbohydrate=100 fat=97 flavour=97']
];


for (let i = 0; i < expectationPairs.length; i++) {
    let expectation = expectationPairs[i];
    console.log(manager(expectation[0]));
}