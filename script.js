let result = 0;
let number = null;
let operation = add;

main();

function main() {
    activateNumButtons();
    activateOpButtons();
    activateEqualButton();
    activateClearButton();
    updateDisplay();
}

function add(n1, n2) {
    return n1 + n2;
}

function subtract(n1, n2) {
    return n1 - n2;
}

function multiply(n1, n2) {
    return n1 * n2;
}

function divide(n1, n2) {
    return n1 / n2;
}

function operate(operation, n1, n2) {
    switch (operation) {
        case add:
            return add(n1, n2);
        case subtract:
            return subtract(n1, n2);
        case multiply:
            return multiply(n1, n2);
        case divide:
            return divide(n1, n2);
    }
}

function updateDisplay() {
    const display = document.querySelector('.display');
    if (number == null) {
        display.textContent = result.toString();
    } else {
        display.textContent = number.toString();
    }
}

function activateNumButtons() {
    const numberList = document.querySelectorAll('.number');
    for (let number of numberList) {
        number.addEventListener('click', inputNumber);
    }
}

function inputNumber(e) {
    if (number == null) {
        number = parseInt(e.target.textContent);
    } else {
        number = parseInt(number.toString() + e.target.textContent);
    }
    updateDisplay();
}

function activateOpButtons() {
    const operationList = document.querySelectorAll('.operation');
    for (let operation of operationList) {
        operation.addEventListener('click', parseOperation);
    }
}

function parseOperation(e) {
    if (number != null) {
        result = operate(operation, result, number);
        number = null;
    }
    const classList = e.target.classList;
    if (classList.contains('add')) {
        operation = add;
    } else if (classList.contains('subtract')) {
        operation = subtract;
    } else if (classList.contains('multiply')) {
        operation = multiply;
    } else if (classList.contains('divide')) {
        operation = divide;
    }
}

function activateEqualButton() {
    const equal = document.querySelector('.equal');
    equal.addEventListener('click', () => {
        result = operate(operation, result, number);
        number = null;
        operation = null;
        updateDisplay();
    });
}

function activateClearButton() {
    const clear = document.querySelector('.clear');
    clear.addEventListener('click', function() {
        result = 0;
        number = null;
        operation = add;
        updateDisplay();
    })
}