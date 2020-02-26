import functions from './functions.js';

// **********
//
// Add the event listeners
// 

idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));

// Listeners for calculator buttons
document.querySelectorAll('#calculatorTable button').forEach( (e) => {
    e.addEventListener('click', () => {
        let num1 = parseFloat(num1Calc.value, 10);
        let num2 = parseFloat(num2Calc.value, 10);
        let operation = e.innerHTML;
        calculatorResult.textContent = functions.calculate(num1, num2, operation);
    });
});