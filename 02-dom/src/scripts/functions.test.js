import functions from './functions.js'

test('Count child elements of target element.', () => {
    document.body.innerHTML = `
        <ol id="orderedList">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ol>
    `;

    const orderedList = document.getElementById('orderedList');
    expect(orderedList.children.length).toBe(3);
});

