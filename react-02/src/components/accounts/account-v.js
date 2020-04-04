export class Account{
    constructor(name, initBalance){
        this.name = name;
        this.totalBalance = initBalance;
    }

    deposit(amount){
        this.totalBalance = ((this.totalBalance * 100) + (amount * 100)) / 100;
    }

    withdraw(amount){
        this.totalBalance = ((this.totalBalance * 100) - (amount * 100)) / 100;
    }

    balance(){
        return this.totalBalance;
    }

    displayPretty(){
        return "$" + this.totalBalance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}

export class AccountController{
    constructor(){
        this.accountList = [];
    }

    addAccount(account, balance){
        this.accountList.push(new Account(account, balance));
    }

    removeAccount(accountName){
        this.accountList.splice(this.accountList.findIndex(value => value.name === accountName), 1);
    }

    returnLargest(){
        let largest = this.accountList[0];
        this.accountList.forEach( value => {
            if(parseFloat(value.totalBalance, 10) > parseFloat(largest.totalBalance, 10)) {
                largest = value;
            }
        })
        return largest
    }

    returnSmallest(){
        let smallest = this.accountList[0];
        this.accountList.forEach( value => {
            if(parseFloat(value.totalBalance, 10) < parseFloat(smallest.totalBalance, 10)) {
                smallest = value;
            }
        })
        return smallest
    }

    sumAccounts(){
        let amount = 0;
        this.accountList.forEach( (value) => {
            amount += parseFloat(value.totalBalance, 10);
        })
        return parseFloat(amount, 10);
    }
}