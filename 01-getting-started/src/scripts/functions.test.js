import functions from './functions'

test('Check the sizes', () => {
    expect(functions.size(-1)).toBe("small"); // Consider the edge cases
    expect(functions.size(0)).toBe("small");
    expect(functions.size(500)).not.toBe("small");
    expect(functions.size(10)).toBe("medium");
    expect(functions.size(15)).toBe("medium");
    expect(functions.size(20)).toBe("large");
    expect(functions.size(2000000)).toBe("large");
    expect(functions.size(-101)).toBe("extra large");
});

test('Does that add function work?', () => {
    expect(functions.add(1,2)).toBe(3);
    expect(functions.add(101,202)).toBe(303);
});

test('Does the subtraction function work?', () => {
    expect(functions.subtract(1,1)).toBe(0);
});

test('Testing even-ness', () => {
    expect(functions.isEven(2)).toBe(true);
    expect(functions.isEven(1)).toBe(false);
    expect(functions.isEven(0)).toBe(true);
    expect(functions.isEven(10.5)).toBe(false);
});

test('Testing Calculator Operations.', () => {
    expect(functions.calculate(1,2,"+")).toBe(3);
    expect(functions.calculate(20,20,"-")).toBe(0);
    expect(functions.calculate(1,2,"*")).toBe(2);
    expect(functions.calculate(5,5,"*")).toBe(25);
    expect(functions.calculate(5,0,"/")).toBe(Infinity);
    expect(functions.calculate(50,.5,"/")).toBe(100);
    expect(functions.calculate(0,0,"+")).toBe(0);
    expect(functions.calculate(0,0,"Y")).toBe("Answer");
});

test('Testing tax calculations', () => {
    expect(functions.calculateTax(48535)).toBe(7280);
    expect(functions.calculateTax(2)).toBe(.3);
    expect(functions.calculateTax(48536)).toBe(7280.2);
    expect(functions.calculateTax(97069)).toBe(17230);
    expect(functions.calculateTax(-50000)).toBe(0);
    expect(functions.calculateTax(150473)).toBe(31115);
    expect(functions.calculateTax(214368)).toBe(49645);
    expect(functions.calculateTax(250000)).toBe(61403.56);
});

test('Can I return a string from an array', () => {
    expect(functions.arrayToString([1,2,3,4,5])).toBe("1,2,3,4,5");
});