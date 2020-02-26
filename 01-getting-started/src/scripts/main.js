import functions from './functions.js';

// **********
//
// Add the event listeners
// 

idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));

// Listener for calculator buttons

document.querySelectorAll('#calculatorTable button').forEach( (e) => {
    e.addEventListener('click', () => {
        calculatorResult.textContent = functions.printToLog(e);
    });
});