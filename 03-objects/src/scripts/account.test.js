import { Account, AccountController } from './account.js';

test('Ensure the object is created with an initial balance.', () => {
    const checkingAccount = new Account('Checking Account', 25);

    expect(checkingAccount.balance()).toBe(25);
    expect(checkingAccount.deposit(10)).toBe();
    expect(checkingAccount.balance()).toBe(35);
    expect(checkingAccount.withdrawl(30)).toBe();
    expect(checkingAccount.balance()).toBe(5);
    expect(checkingAccount.deposit(.99)).toBe();
    expect(checkingAccount.balance()).toBe(5.99);
});

test('Check that the DOM is being manipulated', () => {
    document.body.innerHTML = `
        <div id="root">
        </div>
    `;

    const root = document.getElementById('root');
    const checkingAccount = new Account('My Car Fund', 800);
    root.appendChild(checkingAccount.createCard());

    expect(root.children.length).toBe(1);

    expect(document.body.innerHTML).toContain('My Car Fund');
})

test('Test the collection of accounts is working.', () => {
    const newCollection = new AccountController();
    newCollection.addAccount(new Account('one',100));
    newCollection.addAccount(new Account('two',200));

    expect(newCollection.accountList.length).toBe(2);
    newCollection.removeAccount('two');
    expect(newCollection.accountList.length).toBe(1);
});

test('Sorting accounts.', () => {
    const newCollection = new AccountController();
    newCollection.addAccount(new Account('one',100));
    newCollection.addAccount(new Account('two',200));
    newCollection.addAccount(new Account('three',987654));
    newCollection.addAccount(new Account('four',201));

    expect(newCollection.returnLargest().name).toBe('three');
    expect(newCollection.returnSmallest().name).toBe('one');
    newCollection.removeAccount('three');
    expect(newCollection.returnLargest().name).toBe('four');
    expect(newCollection.returnSmallest().name).toBe('one');
});

test('Tallying total of accounts.', () => {
    const newCollection = new AccountController();
    newCollection.addAccount(new Account('one',100));
    newCollection.addAccount(new Account('two',200));
    newCollection.addAccount(new Account('three',987654));
    newCollection.addAccount(new Account('four',201));

    expect(newCollection.sumAccounts()).toBe(988155);
});