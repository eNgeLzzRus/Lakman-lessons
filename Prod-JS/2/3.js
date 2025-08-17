class Hamburger {
    constructor (size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.topping = [];
    }

    addTopping (topping) {
        if (!this.topping.some(t => t.name === topping.name)) {
            this.topping.push(topping);
            return;
        }
        console.log('Эта добавка уже есть в бургере!');
    }

    removeTopping(topping) {
        if (this.topping.some(t => t.name === topping.name)) {
            this.topping = this.topping.filter(item => item.name !== topping.name);
            return;
        }
        console.log('Этой добавки нет в бургере! Невозможно удалить!');
    }

    getToppings() {
        if (this.topping.length) {
            let toppingsString = 'Добавки текущего бургера: ';
            let toppingNamesArray = this.topping.map(item => item.name)
            toppingsString += toppingNamesArray.join(', ');
            toppingsString += '.';
            console.log(toppingsString);
            return;
        }
        console.log('В этом бургере нет добавок!');
    }

    getSize() {
        console.log(`Размер бургера: ${this.size.size}`);
    }

    getStuffing() {
        console.log(`Этот бургер ${this.stuffing.name}`);
    }

    calculatePrice() {
        let price = 0;
        if (this.topping.length) {
            this.topping.forEach(tpng => {
                price += tpng.price;
            })
        }
        price += this.stuffing.price;
        price += this.size.price;
        console.log(`Цена бургера: ${price} рублей.`);
    }

    calculateCalories() {
        let calories = 0;
        if (this.topping.length) {
            this.topping.forEach(tpng => {
                calories += tpng.calories;
            })
        }
        calories += this.stuffing.calories;
        calories += this.size.calories;
        console.log(`Калорийность бургера: ${calories} калорий.`)
    }    
}

const topping = {
    a: { name: 'Майонез', calories: 5, price: 20 },
    b: { name: 'Приправа', calories: 0, price: 15 },
}

const stuffing = {
    a: { name: 'С сыром', price: 10, calories: 20 },
    b: { name: 'С салатом', price: 20, calories: 5 },
    c: { name: 'С картофелем', price: 15, calories: 10 }
}

const size = {
    a: { size: 'Маленький', price: 50, calories: 20 },
    b: { size: 'Большой', price: 100, calories: 40 },
}

let h1 = new Hamburger(size.a, stuffing.b);
h1.calculatePrice();
h1.addTopping(topping.b);
h1.addTopping(topping.a);
h1.calculateCalories();
h1.calculatePrice();
h1.removeTopping(topping.a);
h1.getToppings();
h1.calculatePrice();
h1.getSize();
h1.getStuffing();
h1.addTopping(topping.a);
h1.getToppings();