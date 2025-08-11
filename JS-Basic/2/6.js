"use strict";

function getMessage(num) {
    let lastChar = num % 10;
    let twoLastChars = num % 100;

    if ((twoLastChars >= 5 && twoLastChars <= 20) || (lastChar >= 5 && lastChar <= 9) || lastChar == 0) {
        return `Ваша сумма в ${num} рублей успешно зачислена`;
    }   else if (lastChar == 1) {
        return `Ваша сумма в ${num} рубль успешно зачислена`;
    }   else {
        return `Ваша сумма в ${num} рубля успешно зачислена`;
    }
}

console.log(getMessage(131));