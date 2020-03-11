export class Account{
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

    createCard(){
        const newDiv = document.createElement('div')
        newDiv.setAttribute('class', 'w3-container w3-card-4 w3-light-grey w3-border w2-round-small w3-padding w3-margin-bottom');
        newDiv.setAttribute('style','width: 100; height: 100;')

        // Title
        const h2 = document.createElement('h2');
        h2.textContent = 'Account Name: ' + this.name;
        h2.setAttribute('class', 'w3-center');
        newDiv.insertAdjacentElement( 'beforeend', h2 );

        return newDiv;
    }
}

export class AccountController{
    constructor(account){

    }

    createCard(name, balance){

    }

    deleteCard(){

    }
}