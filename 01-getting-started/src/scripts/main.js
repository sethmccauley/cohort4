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
    calcTaxResult.textContent = "$" + functions.calculateTax(parseFloat(numToCalcTaxes.value)) + " of federal income tax."
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
        document.getElementById('arrayDisplay').innerHTML = "Input is not a valid number.";
    } else {
        arrayRepresentation.push(validation)
        document.getElementById('arrayDisplay').innerHTML = validation + " added to Array.";
    };
    return undefined;
});

showArray.addEventListener('click', () => {
    document.getElementById('arrayDisplay').innerHTML = arrayRepresentation.toString(); 
    return undefined;
});

showTotal.addEventListener('click', () => {
    document.getElementById('arrayDisplay').innerHTML = "Total: " + arrayRepresentation.reduce((a, b) => a + b, 0); 
    return undefined;
});

clearArray.addEventListener('click', () => {
    document.getElementById('arrayDisplay').innerHTML = "Array cleared.";
    arrayRepresentation = [];
    return undefined;
});

provinceCodeLookup.addEventListener('click', () => {
    document.getElementById('dictionaryLookupText').innerHTML = provincialCodes[document.getElementById('dictionaryLookup').value.toLowerCase()];
    return undefined;
});