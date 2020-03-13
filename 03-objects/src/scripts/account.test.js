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