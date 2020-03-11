import Account from './account.js';

test('Ensure the object is created with an initial balance.', () => {
    let testAccount = new Account('checkingAccount', 25);

    expect(testAccount.balance()).toBe(25);
    expect(testAccount.deposit(10)).toBe(35);
    expect(testAccount.balance()).toBe(35);
    expect(testAccount.widthdrawl(30)).toBe(5);
    expect(testAccount.balance()).toBe(5);
});