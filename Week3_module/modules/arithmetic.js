function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiplication(a,b){
    return a * b;
}

function division(a,b){
    if(b===0){
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

//module.exports = {sum:add,subtract,multiplication,division}
module.exports = {add,subtract,multiplication,division}