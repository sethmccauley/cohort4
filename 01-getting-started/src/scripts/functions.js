
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
};

export default functions;