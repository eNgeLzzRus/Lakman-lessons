"use strict";

var a = -12;
var b = -2;

const takeAction = (a, b) => {
    if (a >= 0 && b >= 0) {
        return a - b;
    }   else if (a < 0 && b < 0) {
        return a * b;
    }   else {          // Поскольку в ином случае до этого просто не дойдет, то это в любом случае сработает только при разных знаках
        return a + b;
    }
}

console.log(takeAction(a, b));