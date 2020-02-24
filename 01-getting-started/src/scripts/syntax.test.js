import syntaxes from './syntax'

test('Is this a number?', () => {
    expect(syntaxes.isNumber("Yes")).toBe(false);
    expect(syntaxes.isNumber(1)).toBe(true);
    expect(syntaxes.isNumber(false)).toBe(false);
});

test('Is this a string?', () => {
    expect(syntaxes.isString(1)).toBe(false);
    expect(syntaxes.isString('Am I?')).toBe(true);
    expect(syntaxes.isString(true)).toBe(false);
});

test('Is this a boolean?', () => {
    expect(syntaxes.isBoolean(true)).toBe(true);
    expect(syntaxes.isBoolean({})).toBe(false);
    expect(syntaxes.isBoolean(false)).toBe(true);
});

test('Is this an array', () => {
    expect(syntaxes.isArray([])).toBe(true);
    expect(syntaxes.isArray({})).toBe(false);
});

test('Is this a Dictionary/Object?', () => {
    expect(syntaxes.isDictionary({})).toBe(true);
    expect(syntaxes.isDictionary([])).toBe(false);
    expect(syntaxes.isDictionary({Name: "Seth"})).toBe(true);
});

test('Finding a property in a Dictionary/Object.', () => {
    expect(syntaxes.hasProperty("Name", {Name: "Seth", Age: 37})).toBe(true);
    expect(syntaxes.hasProperty("Age", {Name: "Seth"})).toBe(false);
});

test('Is this value undefined?', () => {
    expect(syntaxes.isUndefined(undefined)).toBe(true);
    expect(syntaxes.isUndefined(100)).toBe(false);
    expect(syntaxes.isUndefined(() => { return false })).toBe(false);
});

test('Should I hit or stand?', () => {
    expect(syntaxes.hitOrStand(16)).toBe("Hit");
    expect(syntaxes.hitOrStand(17)).toBe("Stand");
    expect(syntaxes.hitOrStand(25)).not.toBe("Hit");
    expect(syntaxes.hitOrStand(30)).toBe("Play Again?");
});

test('Can I connect some strings?', () => {
    expect(syntaxes.stringTogether("Hello ", "World.")).toBe("Hello World.");
    expect(syntaxes.stringTogether("1", "2", "3", " what?")).toBe("123 what?");
});

test('What is the correct answer if I don\'t know it?', () => {
    expect(syntaxes.getDefaultAnswer("B")).toBe("B");
    expect(syntaxes.getDefaultAnswer()).toBe("C");
});