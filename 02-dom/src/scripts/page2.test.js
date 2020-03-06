import CardManager from './page2.js';
//jest.mock('./page2.js'); // CardManager is now a mock constructor

// beforeEach(() => {
//     // Clear all instances and calls to constructor and all methods:
//     CardManager.mockClear();
// });

test('Testing a constructor...', () => {
    document.body.innerHTML = `
        <button id="addCard">Add Card</button>
    `;

    const buttonElement = document.getElementById('addCard');
    const cardManager = new CardManager(buttonElement);

    expect(CardManager).toHaveBeenCalledTimes(1);
});

test('Test method call.', () => {
    document.body.innerHTML = `
        <div>
            <div id="controlPanel">
                <button id="addCard">Add Card</button>
            </div>
        </div>
    `;
    // expect(cardManager).not.toHaveBeenCalled();
    // expect(cardManager).toEqual();

    const buttonElement = document.getElementById('addCard');
    const cardManager = new CardManager(buttonElement);

    // Run call to addCard
    const newDiv = cardManager.createCard(1);
    console.log(newDiv)

    // const mockCardManager = CardManager.mock.instances[0];
    // const mockAddCard = mockCardManager.addCard;
    console.log(document.body.innerHTML);

    // expect(mockAddCard.mock.calls[0][0]).toHaveBeenCalledWith(buttonElement);
});