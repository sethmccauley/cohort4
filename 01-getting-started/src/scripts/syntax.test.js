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
    expect(syntaxes.isUndefined([].find(a => a))).toBe(true);
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
    expect(syntaxes.getDefaultAnswer()).not.toBe("D");
    expect(syntaxes.getDefaultAnswer("B")).toBe("B");
    expect(syntaxes.getDefaultAnswer()).toBe("C");
});

test('Test to insert value at start of array', () => {
    expect(syntaxes.insertAtStart("Apple", ["Grape", "Fish", "Beef"])).toEqual(["Apple", "Grape", "Fish", "Beef"]);
    expect(syntaxes.insertAtStart("One", ["Two", "Three"])).toEqual(["One", "Two", "Three"]);
});

test('Test for adding a value to the end of an array.', () => {
    expect(syntaxes.addToEnd("Last", ["First"])).toEqual(["First", "Last"]);
    expect(syntaxes.addToEnd("One", ["Two"])).not.toEqual(["One", "Two"]);
});

test('Test to ensure countLetters is accurate.', () => {
    expect(syntaxes.countLetters("Hello")).toBe(5);
    expect(syntaxes.countLetters("World")).toBe(5);
    expect(syntaxes.countLetters("supercalafragilisticexpialadocious")).not.toBe(5);
});

test('Make sure we can return the objects red value.', () => {
    expect(syntaxes.findRedValue({"red": 255, "green": 125, "blue": 10})).toBe(255);
    expect(syntaxes.findRedValue({"red": 10, "green": 0, "blue": 0})).toBe(10);
    expect(syntaxes.findRedValue({r: 5, g: 200, b: 100})).toBe(undefined);
});

test('While Loop for numbers to string.', () => {
    expect(syntaxes.numsToString(5)).toBe("54321");
    expect(syntaxes.numsToString(10)).toBe("10987654321");
    expect(syntaxes.numsToString(0)).toBe("");
    expect(syntaxes.numsToString(-5)).toBe("");
});

test('Double a num, then test how many it takes to reach target.', () => {
    expect(syntaxes.doublingNumbers(5, 25)).toBe(3);
    expect(syntaxes.doublingNumbers(2, 4)).toBe(1);
    expect(syntaxes.doublingNumbers(-10, 10)).toBe(undefined);
    expect(syntaxes.doublingNumbers(5, -10)).toBe(undefined);
    expect(syntaxes.doublingNumbers(-1, -2)).toBe(undefined);
});

test('Reduce the numeric values in the array by 1.', () => {
    expect(syntaxes.decrementArrayValues([2,1])).toEqual([1,0]);
    expect(syntaxes.decrementArrayValues([3,2,1])).toEqual([2,1,0]);
    expect(syntaxes.decrementArrayValues([-1])).toEqual([-2]);
});

test('Testing the get empty yet constructed player method.', () => {
    expect(syntaxes.getEmptyPlayer("wizard")).toEqual({Name: "", Level: 0, Class: "wizard"});
    expect(syntaxes.getEmptyPlayer("fighter")).toEqual({Name: "", Level: 0, Class: "fighter"});
    expect(syntaxes.getEmptyPlayer("healer")).toEqual({Name: "", Level: 0, Class: "healer"});
});

test('Retrieving value of element at key x.', () => {
    expect(syntaxes.getProperty("Level", {Name: "", Level: 0, Class: "wizard"})).toBe(0);
    expect(syntaxes.getProperty("Name", {Name: "", Level: 0, Class: "fighter"})).toBe("");
    expect(syntaxes.getProperty("Class", {Name: "", Level: 0, Class: "fighter"})).toBe("fighter");
    expect(syntaxes.getProperty("Faction", {Name: "", Level: 0, Class: "fighter"})).toBe(undefined);
    expect(syntaxes.getProperty("HomePoint", {})).toBe(undefined);
});