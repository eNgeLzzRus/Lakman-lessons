"use strict";

class Game {
    constructor (answer, questions) {
        this.answer = null;
        this.questions = {
            1: ['Какая планета Солнечной системы самая большая? \n A. Юпитер    B. Сатурн\n C. Земля    D. Нептун', 'A'],
            2: ['Кто написал роман "Евгений Онегин"? \n A. Лев Толстой    B. Фёдор Достоевский\n C. Александр Пушкин    D. Николай Гоголь', 'C'],
            3: ['Сколько будет 2^10? \n A. 100    B. 512\n C. 2048    D. 1024', 'D'],
            4: ['Как называется процесс превращения воды в пар? \n A. Конденсация    B. Испарение\n C. Сублимация    D. Кристализация', 'B'],
            5: ['В какой стране находится Эйфелева башня? \n A. Италия    B. Германия\n C. Франция    D. Испания', 'C']
        }
    }

    startGame() {
        let wantToPlay = this.confirmGame();
        
        while (wantToPlay) {
            let balance = 0;
            let isGameOver = false;
            
            alert('Добро пожаловать в игру!');
            
            for (let i = 1; i <= 5 && !isGameOver; i++) {
                if (!this.showQuestion(i)) { 
                    alert("Игра прервана");
                    isGameOver = true;
                    break;
                }   
                
                if (this.answer.toUpperCase() !== this.questions[i][1]) {
                    alert(`Неверно! Игра окончена. Ваш выигрыш: ${balance} рублей`);
                    isGameOver = true;
                    break;
                }

                balance = balance === 0 ? 1000 : balance * 2;
                
                if (i < 5) {
                    if (!confirm(`Правильно! Текущий выигрыш: ${balance} рублей. Продолжить?`)) {
                        alert(`Вы забираете ${balance} рублей!`);
                        isGameOver = true;
                        break;
                    }
                } else {
                    alert(`Победа! Ваш итоговый выигрыш: ${balance} рублей`);
                }
            }
            
            wantToPlay = confirm('Хотите сыграть ещё раз?');
        }
        
        alert('Спасибо за игру! До свидания!');
    }

    confirmGame() {
        return confirm('Желаете начать игру?');
    }
 
    showQuestion(i) {
        let questionsText = this.questions[i][0] + "\nВведите букву ответа:";
        this.answer = prompt(questionsText);
        if (this.answer === null) {
            return false;
        }   
        return true;
    }
}

let game = new Game();
game.startGame();

