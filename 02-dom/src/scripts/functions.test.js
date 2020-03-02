import functions from './functions.js'

test('Append list item to ordered list.', () => {
    document.body.innerHTML = `
        <ol id="orderedList">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ol>
    `;

    const ol = document.getElementById('orderedList')
    expect(functions.appendItem("orderedList","Item 4")).toBe(true);
    expect(ol.children.length).toBe(4);
    expect(ol.children[ol.children.length -1].innerHTML).toBe('Item 4');
});

test('Insert item before all other items in ordered list.', () => {
    document.body.innerHTML = `
        <ol id="orderedList">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ol>
    `;

    const ol = document.getElementById('orderedList')
    expect(functions.addBefore("orderedList","First")).toBe(true);
    expect(ol.children.length).toBe(4);
    expect(ol.children[0].innerHTML).toBe('First');
});

test('Checking that I delete the last item in ordered list.', () => {
    document.body.innerHTML = `
        <ol id="orderedList">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ol>
    `;

    const ol = document.getElementById('orderedList')
    expect(functions.deleteLast('orderedList')).toBe(true);
    expect(ol.children.length).toBe(2);
    expect(ol.children[ol.children.length -1].innerHTML).toBe('Item 2');
});