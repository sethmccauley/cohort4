export class Account{
    constructor(name, balance){
        this.name = name;
        this.totalBalance = balance;
    }

    deposit(amount){
        this.totalBalance = ((this.totalBalance * 100) + (amount * 100)) / 100;
    }

    withdraw(amount){
        this.totalBalance = ((this.totalBalance * 100) - (amount * 100)) / 100;
    }

    balance(){
        return parseFloat(this.totalBalance, 10);
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
            amount += parseFloat(value.balance(), 10);
        })
        return parseFloat(amount, 10);
    }
}