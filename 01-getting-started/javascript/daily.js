const functions = {

    convertToFahrenheit: (num) => {
        let tempConst = 9/5;
        return Math.floor(num*tempConst + 32);
    }
}

export default functions;