import CardManager from './page2.js';

test('Testing a constructor...', () => {
    document.body.innerHTML = `
        <button id="addCard">Add Card</button>
    `;

    const buttonElement = document.getElementById('addCard');
    const cardManager = new CardManager(buttonElement);

    expect(cardManager).toEqual(new CardManager(buttonElement));
});

test('Test method call.', () => {
    document.body.innerHTML = `
        <div>
            <div id="controlPanel">
                <button id="addCard">Add Card</button>
            </div>
        </div>
    `;

    const buttonElement = document.getElementById('addCard');
    const cardManager = new CardManager(buttonElement);

    // Run call to addCard
    buttonElement.click();

    // Test for Card 1 present.
    expect(document.body.innerHTML).toContain("Card 1");

    // Retrieve and invoke the deletion method.
    const newDelete = document.querySelector('.controlCard button:last-of-type');
    newDelete.click();

    // Ensure card 1 is not present.
    expect(document.body.innerHTML).not.toContain("Card 1");

    // Generate new Card
    buttonElement.click();

    // Select add before button and add before
    const newAddBefore = document.querySelector('.controlCard button:first-of-type');
    newAddBefore.click()

    // Test for Card 3
    expect(document.body.innerHTML).toContain("Card 3");
});