export default class Account{
    constructor(name, initBalance){
        this.name = name;
        this.totalBalance = initBalance;
    }

    deposit(amount){
        this.totalBalance += amount;
        return this.balance();
    }

    widthdrawl(amount){
        this.totalBalance -= amount;
        return this.balance();
    }

    balance(){
        return this.totalBalance;
    }
}