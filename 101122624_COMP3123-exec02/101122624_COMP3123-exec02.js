//Steven Nguyen
//101122624

//Exercise 01
gretter = (myArray) =>{
    const greetText = 'Hello ';
    for(let word of myArray){
        console.log(greetText + word)
    }
}

gretter(['Randy Savage','Ric Flair', 'Hulk Hogan']);
console.log()

//Exercise 02
function capitalize(word){
    var letters = [...word];
    let[first,...rest] = letters;
    first = first.toUpperCase();
    let result = first + rest.join("");
    return result;
}

console.log(capitalize('foobar'));
console.log(capitalize('nodeJs'));
console.log()

//Exercise 03
const colors=['red', 'green', 'blue']

let capitalizedColors = colors.map(function capitalize(word){
    var letters = [...word];
    let[first,...rest] = letters;
    first = first.toUpperCase();
    let result = first + rest.join("");
    return result;
})

console.log(capitalizedColors)
console.log()

//Exercise 04
var values = [1, 60, 34, 30, 20, 5]

let filterLessThan20 = values.filter(value => value<20)

console.log(filterLessThan20)
console.log()

//Exercise 05
var array = [1,2,3,4]

let calculateSum = array.reduce(function(total,currentValue){
    return total + currentValue
})
let calculateProduct = array.reduce(function(total,currentValue){
    return  total * currentValue
})

console.log(calculateSum)
console.log(calculateProduct)
console.log()

//Exercise 06
class Car{
    constructor(model, year){
        this.model=model;
        this.year=year;
    }
    details(){
        console.log(this.model + " Engine " + this.year)
    }
}

class Sedan extends Car{
    constructor(model, year, balance){
        super(model,year)
        this.balance = balance;
    }
    info(){
        console.log(`${this.model} has a balance of $${this.balance}`)
    }
}

const car2 = new Car('Pontiac Firebird', 1976);
car2.details();

const sedan = new Sedan('Volvo SD', 2018, 30000);
sedan.info();