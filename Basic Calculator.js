//Prompts user to enter first and second number.
var firstNumber = prompt("What is the first number?");
var secondNumber = prompt("What is the second number?");

//Establishes mathematical operations and corresponding variables by converting from string to number.
var sum = Number(firstNumber) + Number(secondNumber)
var subtract = Number(firstNumber) - Number(secondNumber)
var multiply = Number(firstNumber) * Number(secondNumber)
var divide = Number(firstNumber) / Number(secondNumber)
var option = prompt("Would you like to add, subtract, multiply, or divide?");

//If loops that correspond with the variables above.
if(option === "add"){
    alert("This is your answer: " + sum)
}

if(option === "subtract"){
    alert("This is your answer: " + subtract)
}

if(option === "multiply"){
    alert("This is your answer: " + multiply)
}

if(option === "divide"){
    alert("This is your answer: " + divide)
}