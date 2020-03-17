import { Account, AccountController } from './account.js';

const accountManager = new AccountController();


// Event Listeners

addAccount.addEventListener('click', () => {
    // Test value is present
    if(document.getElementById('accountName').value == "") return alert('Account Name Required.');

    // Generate Account and push to Collection
    let tempAccount = new Account(document.getElementById('accountName').value, document.getElementById('initialBalance').value || 0);
    document.getElementById('addAccountControl').insertAdjacentElement('afterend', tempAccount.createCard());
    accountManager.addAccount(tempAccount);

    // Clean Up
    resetFields();
    updateSummary();
    hideAndShow();
});

accountController.addEventListener('click', (e) => {
    if(e.target.innerText == "Delete Account" && e.target.tagName == "BUTTON"){
        let localAccountName = e.target.parentNode.parentNode.children[0].innerText;
        e.target.parentNode.parentNode.remove();
        accountManager.removeAccount(localAccountName);
    }
    console.log(e.target.data)
    updateSummary();
    hideAndShow();
});

// DOM Helper Functions
function resetFields(){
    document.getElementById('accountName').value = "";
    document.getElementById('initialBalance').value = "";
}

function hideAndShow(){
    let summary = document.getElementById('summary');
    if( accountManager.accountList.length > 0 ) {
        if (summary.className.indexOf("w3-show") == -1) {
            summary.className += " w3-show";
        }
    } else {
        summary.className = summary.className.replace(" w3-show", "");
    }
}

function updateSummary(){
    if( accountManager.accountList.length > 0 ) {
        let largest = document.getElementById('largestAccount');
        let smallest = document.getElementById('smallestAccount');
        let sumAccounts = document.getElementById('sumOfAccounts');

        largest.textContent = accountManager.returnLargest().name + ': ' + accountManager.returnLargest().displayPretty();
        smallest.textContent = accountManager.returnSmallest().name + ': ' + accountManager.returnSmallest().displayPretty();
        sumAccounts.textContent = accountManager.sumAccounts();
    }
}