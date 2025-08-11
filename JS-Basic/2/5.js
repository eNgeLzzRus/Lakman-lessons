"use strict";

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    return a / b;
}

function multiply(a, b) {
    return a * b;
}

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "add": return add(arg1, arg2);
        case "subtract": return subtract(arg1, arg2);
        case "divide": return divide(arg1, arg2);
        case "multiply": return multiply(arg1, arg2);
        default: return "Error"
    }
}

console.log(mathOperation(12, -200, "add")); // -188
console.log(mathOperation(1232134, 23423423, "subtract")); // -22191289
console.log(mathOperation(142, 2, "divide")); // 71
console.log(mathOperation(12312, -123, "multiply")); // -1514376
console.log(mathOperation(12314, 12412, "123")); // Error