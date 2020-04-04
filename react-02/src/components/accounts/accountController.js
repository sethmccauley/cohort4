import React from 'react';
import Account from './account.js';
import { AccountController as AccController } from './account-v';

const accountController = new AccController()

class AccountController extends React.Component {
    constructor(props) {
        super(props)

        this.state={
            control: accountController,
        }
        this.addedAccount={
            name: '',
            balance: '',
        }
    }

    handleChange = (e) => {
        this.addedAccount[e.target.id] = e.target.value
    }

    addAccount = () => {
        if(this.addedAccount.name === '') return alert('Please input an account name.')
        let accounts = this.state.control

        let determineId = accounts.accountList.findIndex(value => value.name === this.addedAccount.name)
        determineId === -1 ? accounts.addAccount(this.addedAccount.name, this.addedAccount.balance) : alert('Please input a unique account name.')

        this.setState({
            control: accounts
        })
        this.name.value = ''
        this.balance.value = ''
    }

    fetchAccount(name) {
        let index = this.state.control.accountList.findIndex(value => value.name === name)
        return {i: index, a: this.state.control.accountList[index]}
    }

    // Account Handlers
    deposit = (name, amt) => {
        const localAcc = this.fetchAccount(name)
        localAcc.a.deposit(parseFloat(amt, 10))

        this.setState({
            control: this.state.control,
            status: 'deposited'
        })
    }
    withdraw = (name, amt) => {
        const localAcc = this.fetchAccount(name)
        localAcc.a.withdraw(parseFloat(amt, 10))

        this.setState({
            status: 'withdrawn'
        })
    }
    deleteAccount = (name) => {
        this.state.control.removeAccount(name);
        this.setState({
            status: 'deleted'
        })
    }

    // Summary Handlers
    returnLargest() {
        let largest = this.state.control.returnLargest() || {name: 'None', totalBalance: 0}
        return largest.name + ': $' + largest.totalBalance
    }
    returnSmallest() {
        let smallest = this.state.control.returnSmallest() || {name: 'None', totalBalance: 0}
        return smallest.name + ': $' + smallest.totalBalance
    }
    sumofAccounts() {
        let amount = this.state.control.sumAccounts();
        return parseFloat(amount, 10)
    }

    render() {
        const smallest = this.returnSmallest();
        const largest = this.returnLargest();
        const sum = this.sumofAccounts();

        const accountCards = this.state.control.accountList.map((account, i) => {
            return (
                <Account 
                    key={i} 
                    id={i} 
                    account={account}
                    delete={(name) => this.deleteAccount(name)}
                    deposit={(name, amt) => this.deposit(name, amt)}
                    withdraw={(name, amt) => this.withdraw(name, amt)}
                />
            )
        })

        const showOrHide = (this.state.control.accountList.length > 0) ? 'w3-show' : 'w3-hide'

        return (
            <div className="w3-content w3-section">
                <h1 style={{color: 'white'}}> Account Controller</h1>
                <div className="w3-container w3-card-4 w3-light-grey w3-border w2-round-small w3-padding w3-margin-bottom" style={{width: '100%', height: '100%'}}>
                    <div className="w3-col" style={{width: '50px'}}>
                        <i className="w3-xxlarge fa fa-user-circle fa-2x"></i>
                    </div>
                    <div className="w3-rest">
                        <input className="w3-input w3-border w3-radius-small" type="text" ref={el => this.name = el} placeholder="Account Name" id="name" onChange={this.handleChange}></input>
                    </div>
                    <div className="w3-row w3-section">
                        <div className="w3-col" style={{width: '50px'}}>
                            <i className="w3-xxlarge fa fa-money fa-2x"></i>
                        </div>
                        <div className="w3-rest">
                            <input className="w3-input w3-border w3-radius-small" type="number"  ref={el => this.balance = el} placeholder="Initial Balance" id="balance" onChange={this.handleChange}></input>
                        </div>
                    </div>

                    <button id="addAccount" className="w3-button w3-block w3-teal w3-ripple w3-padding" onClick={this.addAccount}>+ Add Account +</button>

                    <div className={showOrHide + ' w3-row w3-section w3-center w3-display-container w3-space-between'} style={{display: 'flex', alignItems: 'center'}} id="summary">

                        <div className="w3-col s4 w3-padding-small w3-amber w3-round-small"><strong>Largest Account</strong>
                            <br /><span id="largestAccount">{largest}</span>
                        </div>
                        <div className="w3-col s4 w3-padding-small w3-deep-orange w3-round-small"><strong>Smallest Account</strong>
                            <br /><span id="smallestAccount">{smallest}</span>
                        </div>
                        <div className="w3-col s4 w3-padding-small w3-blue-grey w3-round-small"><strong>Sum of Accounts</strong>
                            <br /><span id="sumOfAccounts">${sum}</span>
                        </div>

                    </div>
                </div>
                {accountCards}
            </div>
        );
    }
}

export default AccountController;