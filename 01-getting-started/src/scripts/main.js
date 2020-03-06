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

numToCalcTaxes.addEventListener('keyup', () => {
    calcTaxResult.textContent = "$" + functions.calculateTax(parseFloat(numToCalcTaxes.value)) + " of federal income tax.";
});

// Local variable for array storage and dictionary lookups
let arrayRepresentation = [];
const provincialCodes = {
    ab: "Alberta",
    bc: "British Columbia",
    sk: "Saskatchewan",
    mb: "Manitoba",
    nb: "New Brunswick",
    nl: "Newfoundland and Labrador",
    ns: "Nova Scotia",
    nt: "Northwest Territories",
    nu: "Nunavut",
    on: "Ontario",
    pe: "Prince Edward Island",
    qc: "Quebec",
    yt: "Yukon",
}

// Listeners for array manipulator buttons
addToArray.addEventListener('click', () => {
    let validation = parseInt(document.getElementById('arrayInput').value)
    if (isNaN(validation)) {
        document.getElementById('arrayDisplay').textContent = "Input is not a valid number.";
    } else {
        arrayRepresentation.push(validation)
        document.getElementById('arrayDisplay').textContent = validation + " added to Array.";
    };
});

showArray.addEventListener('click', () => {
    document.getElementById('arrayDisplay').textContent = arrayRepresentation.toString(); 
});

showTotal.addEventListener('click', () => {
    document.getElementById('arrayDisplay').textContent = "Total: " + arrayRepresentation.reduce((a, b) => a + b, 0); 
});

clearArray.addEventListener('click', () => {
    document.getElementById('arrayDisplay').textContent = "Array cleared.";
    arrayRepresentation = [];
});

provinceCodeLookup.addEventListener('click', () => {
    document.getElementById('dictionaryLookupText').textContent = provincialCodes[document.getElementById('dictionaryLookup').value.toLowerCase()];
});