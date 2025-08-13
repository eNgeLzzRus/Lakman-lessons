"use strict";

function convertingNumber (num) {
    let convertedNumber = {
        units: 0,
        tens: 0,
        hundreds: 0
    };

    const str = String(num);

    if (!Number.isInteger(num)) {
        console.log("Введите число");
        return convertedNumber = {};
    }
    if (num > 999 || num < 0) {
        console.log("Введите число от 0 до 999");
        return convertedNumber = {};
    }
    if (str.length == 3) {
        convertedNumber.hundreds = +str[str.length - 3];
    }
    if (str.length >= 2) {
        convertedNumber.tens = +str[str.length - 2];
    }
    if (str.length >= 1) {
        convertedNumber.units = +str[str.length - 1];
    }

    return convertedNumber;
}

console.log(convertingNumber(123));