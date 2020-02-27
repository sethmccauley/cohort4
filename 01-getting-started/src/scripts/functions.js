
const functions = {
    
    size: (num) => {
        if (num < -100) return "extra large";
        if (num < 10) return "small";
        if (num < 20) return "medium";
        return "large";
    },

    add: (num1, num2) => {
        return num1 + num2;
    },

    subtract: (num1, num2) => {
        return num1 - num2;
    },

    isEven: (num) => {
        if (num%2 == 0) return true;
        return false;
    },

    printToLog: (...e) => {
        console.log(e)
    },

    calculate: (num1, num2, operation) => {
        let haltables = ["", null, undefined, NaN];
        if (haltables.includes(num1) || haltables.includes(num2)) return "Answer";
        switch(operation) {
            case "+":
                return num1 + num2;
            case "-":
                return num1 - num2;
            case "/":
                return num1 / num2;
            case "*":
                return num1 * num2;
            default:
                return "Answer";
        };
    },

    calculateTax: (income) => {
        let totalTax = 0;
        let taxInformation = [
            {bracket: 48535, rate: .15, max: 7280},
            {bracket: 48534, rate: .205, max: 9950},
            {bracket: 53404, rate: .26, max: 13885},
            {bracket: 63895, rate: .29, max: 18530},
            {bracket: Infinity, rate: .33, max: 0}
        ];
        taxInformation.forEach((e) => {
            if(income >= e["bracket"]) {
                totalTax += e["max"];
            } else {
                if(income > 0) totalTax += income * e["rate"];
            }
            income -= e["bracket"];
        })
        //Fix Truncation to two decimal places
        totalTax = totalTax.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0];
        return parseFloat(totalTax, 10);
    },
};

export default functions;