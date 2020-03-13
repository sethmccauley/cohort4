import { Account, AccountController } from './account.js';

let accountManager = new AccountController();

addAccount.addEventListener('click', (e) => {
    let collector = e.target.parentNode.children;
    let accountName = collector[0].children[1].children[0].value;
    let initialBalance = collector[1].children[1].children[0].value || 0;
    if(accountName == "") return alert('Account Name Required.');
    collector[0].children[1].children[0].value = "";
    collector[1].children[1].children[0].value = "";
    let tempAccount = new Account(accountName, initialBalance);
    e.target.parentNode.insertAdjacentElement('afterend', tempAccount.createCard());
    accountManager.addAccount(tempAccount);
});