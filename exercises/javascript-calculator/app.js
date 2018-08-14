var readlineSync = require('readline-sync')
var num1 = readlineSync.question('Please enter your first number: ');
var num2 = readlineSync.question('Please enter your second number: ');
var operation = readlineSync.question('Which operation do you want to perform?: ')
var answer;
    if(operation === "add"){
       answer = addTwo(num1, num2)
    } else if(operation === "sub"){
        answer = subtract(num1, num2)
    } else if(operation === "mul"){
        answer = mult(num1, num2)
    } else if (operation === "div"){
        answer = divide(num1, num2)
    } else {
        console.log("invalid operation")
    }
    console.log(`The result is: ${answer}`)

// A function that adds two numbers and returns the result
function addTwo(num1, num2){
             return num1 + num2
    }

// A function that multiplies two numbers and returns the result
function mult(num1, num2){
    return num1 * num2
}

// A function that divides two numbers and returns the result
function divide(num1, num2){
    return num1 / num2
}

// A function that subtracts two numbers and returns the result
function subtract(num1, num2){
    return num1 - num2
}

// Each function will have 2 parameters, num1, num2
// On the console the prompt will print to the user:
// Please enter your first number (store that number)
// Please enter your second number (store that number)
// Please enter the operation to perform: add, sub, mul, div (then store the operation)
// Based on the operation entered by the user, you will call one of your 4 functions to perform the correct operation
// You will then print to the console: The result is: [the result]
