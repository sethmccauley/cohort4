import syntaxes from './syntax'

test('Is this a number?', () => {
    expect(syntaxes.isNumber("Yes")).toBe(false);
    expect(syntaxes.isNumber(1)).toBe(true);
    expect(syntaxes.isNumber(false)).toBe(false);
})

test('Is this a string?', () => {
    expect(syntaxes.isString(1)).toBe(false);
    expect(syntaxes.isString('Am I?')).toBe(true);
    expect(syntaxes.isString(true)).toBe(false);
})

test('Is this a boolean?', () => {
    expect(syntaxes.isBoolean(true)).toBe(true);
    expect(syntaxes.isBoolean({})).toBe(false);
    expect(syntaxes.isBoolean(false)).toBe(true);
})

test('Is this an array', () => {
    expect(syntaxes.isArray([])).toBe(true);
})