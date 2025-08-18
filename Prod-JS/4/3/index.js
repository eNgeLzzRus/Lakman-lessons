const nameExp = /^[a-zA-Zа-яА-яёЁ]+$/;        
const phoneExp = /^\+7\([0-9]{3}\)[0-9]{3}\-[0-9]{4}$/;
const mailExp = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/;

const nameEl = document.querySelector('.name');
const phoneEl = document.querySelector('.phone');
const mailEl = document.querySelector('.mail');
const form = document.querySelector('form'); 

function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(el => el.remove());
}

function showError(input, message) {
    const error = document.createElement('p');
    error.className = 'error-message';
    error.style.color = 'red';
    error.style.fontSize = '14px';
    error.textContent = message;
    input.insertAdjacentElement('afterend', error);
}

form.addEventListener('submit', function(e) {
    e.preventDefault(); 

    clearErrors(); 

    let isValid = true;

    if (!nameEl.value.trim() || !nameExp.test(nameEl.value.trim())) {
        nameEl.style.borderColor = 'red';
        showError(nameEl, 'Имя должно содержать только буквы!');
        isValid = false;
    } else {
        nameEl.style.borderColor = '';
    }


    if (!phoneEl.value.trim() || !phoneExp.test(phoneEl.value.trim())) {
        phoneEl.style.borderColor = 'red';
        showError(phoneEl, 'Номер должен быть в формате +7(000)000-0000.');
        isValid = false;
    } else {
        phoneEl.style.borderColor = '';
    }

    if (!mailEl.value.trim() || !mailExp.test(mailEl.value.trim())) {
        mailEl.style.borderColor = 'red';
        showError(mailEl, 'Неверный формат почты!');
        isValid = false;
    } else {
        mailEl.style.borderColor = '';
    }

    if (isValid) {
        alert('Форма успешно отправлена!');
        form.submit();
    }
});