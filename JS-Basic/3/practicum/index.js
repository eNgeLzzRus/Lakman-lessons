"use strict";

function startGame() {
    let value = generateValue();
    console.log(value);
    
    function playGame() {
        let yourNumber = prompt('Угадайте четырёхзначное число без повторяющихся цифр').split('').map(Number);
        if (yourNumber === null) return;
        
        let bulls = searchBulls(value, yourNumber);
        let cows = searchCows(value, yourNumber) - bulls;

        if (bulls === 4) {
            alert(`Поздравляю! Ты победил!\nЗагаданное число ${value.join('')}`);
            if (confirm('Продолжить игру?')) {
                startGame();
            }
        } else if (bulls > 0 || cows > 0) {
            alert(`Вы нашли ${bulls} быков и ${cows} коров!`);
            playGame();
        } else {
            alert('Вы не нашли никого! :(\nПродолжайте, возможно вам повезёт!');
            playGame();
        }
    }

    playGame();
};

function generateValue() {
    let array = [];

    while (array.length < 4) { 
        let item = String(Math.floor(Math.random() * 10));

        if (!array.includes(item)) {
            array.push(item);
        }
    }

    return array; 
}

function searchCows(value, yourNumber) {
    let cowsQuantity = 0;

    for (let digit of yourNumber) {
        if (value.includes(String(digit))) {
            cowsQuantity++;
        }
    }

    return cowsQuantity;
}

function searchBulls (value, yourNumber) {
    let bullsQuantity = 0;

    for (let val in value) {
        if (value[val] == yourNumber[val]) {
            bullsQuantity++;
        }
    }

    return bullsQuantity;
}

startGame();