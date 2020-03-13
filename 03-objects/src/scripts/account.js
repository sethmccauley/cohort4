export class Account{
    constructor(name, initBalance){
        this.name = name;
        this.totalBalance = initBalance;
    }

    deposit(amount){
        this.totalBalance = ((this.totalBalance * 100) + (amount * 100)) / 100;
    }

    withdrawl(amount){
        this.totalBalance = ((this.totalBalance * 100) - (amount * 100)) / 100;
    }

    balance(){
        return this.totalBalance;
    }

    displayPretty(){
        return "$" + this.totalBalance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    createCard(){
        const newDiv = document.createElement('div')
        newDiv.setAttribute('class', 'w3-container w3-card-4 w3-light-grey w3-border w2-round-small w3-padding w3-margin-bottom');
        newDiv.setAttribute('style','width: 100; height: 100;')

        // Title
        const h2 = document.createElement('h2');
        h2.textContent = this.name;
        h2.setAttribute('class', 'w3-center');
        newDiv.appendChild(h2);

        // withdrawl Section
        const withdrawlDiv = document.createElement('div');
        withdrawlDiv.setAttribute('class', 'w3-row w3-section');
        const withdrawlCol = document.createElement('div');
        withdrawlCol.setAttribute('class', 'w3-col');
        withdrawlCol.setAttribute('style', 'width:100px');
        const withdrawlButton = document.createElement('button');
        withdrawlButton.setAttribute('class','w3-button w3-green');
        withdrawlButton.setAttribute('style','width: 100px');
        withdrawlButton.textContent = 'Withdrawl';
        withdrawlCol.appendChild(withdrawlButton);
        const withdrawlRest = document.createElement('div');
        withdrawlRest.setAttribute('class', 'w3-rest');
        const withdrawlAmount = document.createElement('input');
        withdrawlAmount.setAttribute('class','w3-input w3-border w3-radius-small');
        withdrawlAmount.setAttribute('type','number');
        withdrawlAmount.setAttribute('placeholder', '0.00');
        withdrawlRest.appendChild(withdrawlAmount);

        withdrawlDiv.appendChild(withdrawlCol);
        withdrawlDiv.appendChild(withdrawlRest);
        newDiv.appendChild(withdrawlDiv);

        // Deposit Section
        const depositDiv = document.createElement('div');
        depositDiv.setAttribute('class', 'w3-row w3-section');
        const depositCol = document.createElement('div');
        depositCol.setAttribute('class', 'w3-col');
        depositCol.setAttribute('style', 'width:100px');
        const depositButton = document.createElement('button');
        depositButton.setAttribute('class','w3-button w3-green');
        depositButton.setAttribute('style','width: 100px');
        depositButton.textContent = 'Deposit';
        depositCol.appendChild(depositButton);
        const depositRest = document.createElement('div');
        depositRest.setAttribute('class', 'w3-rest');
        const depositAmount = document.createElement('input');
        depositAmount.setAttribute('class','w3-input w3-border w3-radius-small');
        depositAmount.setAttribute('type','number');
        depositAmount.setAttribute('placeholder', '0.00');
        depositRest.appendChild(depositAmount);

        depositDiv.appendChild(depositCol);
        depositDiv.appendChild(depositRest);
        newDiv.appendChild(depositDiv);

        // Balance Section
        const balanceDiv = document.createElement('div');
        balanceDiv.setAttribute('class','w3-row w3-section w3-dark-grey');
        const balanceCol = document.createElement('div');
        balanceCol.setAttribute('class','w3-col w3-padding-small');
        balanceCol.setAttribute('style','width: 100px');
        balanceCol.textContent = "Balance: ";
        balanceDiv.appendChild(balanceCol);
        const balanceRest = document.createElement('div');
        balanceRest.setAttribute('class','w3-rest w3-padding-small');
        balanceRest.textContent = this.displayPretty();
        balanceDiv.appendChild(balanceRest);

        newDiv.appendChild(balanceDiv);

        // Delete
        const balanceDelete = document.createElement('div');
        balanceDelete.setAttribute('class', 'w3-row w3-section w3-light-grey w3-right');
        const deleteButton = document.createElement('button');
        deleteButton.setAttribute('class', 'w3-button w3-teal w3-small');
        deleteButton.setAttribute('style', 'width: 200px');
        deleteButton.textContent = "Delete Account";
        balanceDelete.appendChild(deleteButton);
        balanceDiv.appendChild(balanceDelete);
        
        newDiv.appendChild(balanceDelete)

        withdrawlButton.addEventListener('click', () => {
            if(withdrawlAmount.value == 0) return undefined;
            this.withdrawl(parseFloat(withdrawlAmount.value, 10));
            withdrawlAmount.value = "";
            depositAmount.value = "";
            balanceRest.textContent = this.displayPretty();
        });
        depositButton.addEventListener('click', () => {
            if(depositAmount.value == 0) return undefined;
            this.deposit(parseFloat(depositAmount.value, 10));
            withdrawlAmount.value = "";
            depositAmount.value = "";
            balanceRest.textContent = this.displayPretty();
        });
        return newDiv;
    }
}

export class AccountController{
    constructor(){
        this.accountList = [];
    }

    addAccount(account){
        this.accountList.push(account);
    }

    removeAccount(accountName){
        this.accountList.splice(this.accountList.findIndex(value => value.name == accountName), 1);
    }

    sortAccounts(){
        let largest = this.accountList[0];
        this.accountList.forEach( value => {
            if(value.totalBalance > largest.totalBalance) {
                largest = value;
            }
        })
        return largest
    }
}