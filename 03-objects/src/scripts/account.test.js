import Account from './account.js';

test('Ensure the object is created with an initial balance.', () => {
    let checkingAccount = new Account('checkingAccount', 25);

    expect(checkingAccount.balance()).toBe(25);
    expect(checkingAccount.deposit(10)).toBe();
    expect(checkingAccount.balance()).toBe(35);
    expect(checkingAccount.widthdrawl(30)).toBe();
    expect(checkingAccount.balance()).toBe(5);
});