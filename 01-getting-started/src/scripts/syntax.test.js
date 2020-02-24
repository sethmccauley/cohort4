import syntaxes from './syntax'

test('Is this a number?', () => {
    expect(syntaxes.isNumber("Yes")).toBe(false);
    expect(syntaxes.isNumber(1)).toBe(true);
    expect(syntaxes.isNumber(false)).toBe(false);
})

test('Is this a string?', () => {
    expect(syntaxes.isString(1)).toBe(false);
})