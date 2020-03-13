import { Account, AccountController } from './account.js';

test('Ensure the object is created with an initial balance.', () => {
    let checkingAccount = new Account('checkingAccount', 25);

    expect(checkingAccount.balance()).toBe(25);
    expect(checkingAccount.deposit(10)).toBe();
    expect(checkingAccount.balance()).toBe(35);
    expect(checkingAccount.withdrawl(30)).toBe();
    expect(checkingAccount.balance()).toBe(5);
    expect(checkingAccount.deposit(.99)).toBe();
    expect(checkingAccount.balance()).toBe(5.99);
});