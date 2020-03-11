export default class Account{
    constructor(name, initBalance){
        this.name = name;
        this.totalBalance = initBalance;
    }

    deposit(amount){
        this.totalBalance += amount;
    }

    widthdrawl(amount){
        this.totalBalance -= amount;
    }

    balance(){
        return this.totalBalance;
    }
}