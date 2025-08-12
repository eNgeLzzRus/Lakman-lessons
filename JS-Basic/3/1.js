"use strict";

for (let i = 0; i <= 10; i++) {
    let text = null;

    if (i == 0) {
        text = "Это ноль";
    }   else if (i % 2 == 0) {
        text = "Чётное число";
    }   else {
        text = "Нечётное число"
    }

    console.log(`${i} - ${text}`);
}