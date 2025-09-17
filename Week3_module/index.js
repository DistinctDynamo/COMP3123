const http = require('http'); //built-in module
const os = require('os'); //built-in module

const arithmetic = require('./modules/arithmetic');
const{add,subtract}=arithmetic;
//const{add, subtract}=require('./modules/arithmetic.js');
const greet = require('./modules/greet');

//Global Objects
//console.log(global)
//console.log(console)
//console.log(__dirname) //current directory
//console.log(__filename) //current file

//console.log(module) //current module
//console.log(module.exports) //what is exported from the current module

console.log(arithmetic)
console.log(greet)
console.log(arithmetic.sum(5,3))
console.log(arithmetic.subtract(5,3))
console.log(arithmetic.multiplication(5,3))
console.log(arithmetic.division(6,3))