import functions from './functions.js'

test('Count child elements of target element.', () => {
    expect(functions.countChildren(element)).toBe(3);
});