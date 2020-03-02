import functions from './functions.js'

test('Append list item to ordered list.', () => {
    document.body.innerHTML = `
        <ol id="orderedList">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ol>
    `;

    expect(functions.appendItem("orderedList","Item 4")).toBe(true);
});

test('Insert item before all other items in list.', () => {
    document.body.innerHTML = `
        <ol id="orderedList">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ol>
    `;

    expect(functions.appendItem("orderedList","First")).toBe(true);
});

test('Checking that I delete the last item in ol.', () => {
    document.body.innerHTML = `
        <ol id="orderedList">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ol>
    `;

    expect(functions.deleteLast('orderedList')).toBe(true);
    expect(document.getElementById('orderedList').children.length).toBe(2);
});