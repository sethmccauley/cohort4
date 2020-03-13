import { Account, AccountController } from './account.js';

const accountManager = new AccountController();

addAccount.addEventListener('click', () => {
    // Test value is present
    if(document.getElementById('accountName').value == "") return alert('Account Name Required.');

    // Generate Account and push to Collection
    let tempAccount = new Account(document.getElementById('accountName').value, document.getElementById('initialBalance').value || 0);
    document.getElementById('addAccountControl').insertAdjacentElement('afterend', tempAccount.createCard());
    accountManager.addAccount(tempAccount);

    // Clean Up
    resetFields();
});

accountController.addEventListener('click', (e) => {
    if(e.target.innerText == "Delete Account"){
        let localAccountName = e.target.parentNode.parentNode.children[0].innerText;
        e.target.parentNode.parentNode.remove();
        accountManager.removeAccount(localAccountName);
    }
});

function resetFields(){
    document.getElementById('accountName').value = "";
    document.getElementById('initialBalance').value = "";
}