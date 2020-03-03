import CardManager from './page2.js';
jest.mock('./page2.js');

beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    CardManager.mockClear();
});

test('Testing a constructor...', () => {
    const cardmanager = new CardManager(1);
    expect(CardManager).toHaveBeenCalledTimes(1);
});

test('Test method call.', () => {
    expect(CardManager).not.toHaveBeenCalled();

    const cardmanager = new CardManager(1);
    expect(CardManager).toHaveBeenCalledTimes(1);

    // Run call to addCard
    cardmanager.addCard();

    const mockCardManager = CardManager.mock.instances[0];
    const mockCardCreation = mockCardManager.addCard;
    
    expect(mockCardCreation.mock.calls[0][0]).toEqual(undefined);
    expect(mockCardCreation).toHaveBeenCalledTimes(1);

});