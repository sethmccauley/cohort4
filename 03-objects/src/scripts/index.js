import { Account, AccountController } from './account.js';

addAccount.addEventListener('click', (e) => {
    let collector = e.target.parentNode.children;
    let accountName = collector[0].children[1].children[0].value;
    let initialBalance = collector[1].children[1].children[0].value || 0;
    if(accountName == "") return alert('Account Name Required.');
    
    e.target.parentNode.insertAdjacentElement('afterend', new Account(accountName, initialBalance).createCard())
});

let newAccount = new Account('My Checking Account', 500);
document.getElementById('accountController').appendChild(newAccount.createCard());