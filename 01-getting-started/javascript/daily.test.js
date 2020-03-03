import functions from './daily.js'

test('Check the conversion.', () => {
    expect(functions.convertToFahrenheit(-40)).toBe(-40);
    expect(functions.convertToFahrenheit(0)).toBe(32);
    expect(functions.convertToFahrenheit(28)).toBe(82);
    expect(functions.convertToFahrenheit(100)).toBe(212);
});
