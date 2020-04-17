import { Account, AccountController } from './account-pojo.js';

test('Ensure the object is created with an initial balance.', () => {
    const checkingAccount = new Account('Checking Account', 25);

    expect(checkingAccount.balance()).toBe(25);
    expect(checkingAccount.deposit(10)).toBe();
    expect(checkingAccount.balance()).toBe(35);
    expect(checkingAccount.withdraw(30)).toBe();
    expect(checkingAccount.balance()).toBe(5);
    expect(checkingAccount.deposit(.99)).toBe();
    expect(checkingAccount.balance()).toBe(5.99);
});

test('Test the collection of accounts is working.', () => {
    const newCollection = new AccountController();
    newCollection.addAccount('one',100);
    newCollection.addAccount('two',200);

    expect(newCollection.accountList.length).toBe(2);
    newCollection.removeAccount('two');
    expect(newCollection.accountList.length).toBe(1);
});

test('Sorting out removal, and largest/smallest of accounts.', () => {
    const newCollection = new AccountController();
    newCollection.addAccount('one',100);
    newCollection.addAccount('two',200);
    newCollection.addAccount('three',987654);
    newCollection.addAccount('four',201);

    expect(newCollection.returnLargest().name).toBe('three');
    expect(newCollection.returnSmallest().name).toBe('one');
    newCollection.removeAccount('three');
    expect(newCollection.returnLargest().name).toBe('four');
    expect(newCollection.returnSmallest().name).toBe('one');
});

test('Tallying total of accounts.', () => {
    const newCollection = new AccountController();
    newCollection.addAccount('two',200);
    newCollection.addAccount('three',987654);
    newCollection.addAccount('four',201);
    newCollection.addAccount('one',100);
    expect(newCollection.sumAccounts()).toBe(988155);
});