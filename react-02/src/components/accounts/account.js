import React from 'react';

class Account extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            balanceAdj: 0,
        }
    }
    handleChange = (e) => {
        this.setState({
            balanceAdj: parseFloat(e.target.value, 10)
        })
    }

    onSubmit = (e) => {
        if(e.target.tagName === 'BUTTON'){
            console.log(e.target.textContent)
            if(e.target.textContent === 'Withdrawl'){
                this.props.withdraw(this.props.account.name, this.state.balanceAdj)
                console.log("From Withdraw ", e.target)
            }
            if(e.target.textContent === 'Deposit'){
                this.props.deposit(this.props.account.name, this.state.balanceAdj)
            }
        }
        this.setState({
            balanceAdj: 0
        })
        this.withdrawAmt.value = ''
        this.depositAmt.value = ''
    }

    render() {
        return (
            <div className="w3-container w3-card-4 w3-light-grey w3-border w3-round-small w3-padding w3-margin-bottom">
                <h2 className="w3-center">{this.props.account.name}</h2>
                <div className="w3-row w3-section">
                    <div className="w3-col" style={{width: '100px'}}>
                        <button className="w3-button w3-green" style={{width: '100px'}} onClick={(e) => this.onSubmit(e)}>Withdrawl</button>
                    </div>
                    <div className="w3-rest">
                        <input className="w3-input w3-border w3-radius-small" type="number" ref={el => this.withdrawAmt = el} placeholder="0.00" onChange={this.handleChange}></input>
                    </div>
                </div>
                <div className="w3-row w3-section">
                    <div className="w3-col" style={{width: '100px'}}>
                        <button className="w3-button w3-green" style={{width: '100px'}} onClick={(e) => this.onSubmit(e)}>Deposit</button>
                    </div>
                    <div className="w3-rest">
                        <input className="w3-input w3-border w3-radius-small" type="number" ref={el => this.depositAmt = el} placeholder="0.00" onChange={this.handleChange}></input>
                    </div>
                </div>
                <div className="w3-row w3-section w3-dark-grey">
                    <div className="w3-col w3-padding-small" style={{width: '100px'}}>
                        Balance: 
                    </div>
                    <div className="w3-rest w3-padding-small w3-left">
                        <span>{this.props.account.displayPretty()}</span>
                    </div>
                </div>
                <div className="w3-row w3-section w3-light grey w3-right">
                    <button className="w3-button w3-teal w3-small" style={{width: '200px'}} onClick={() => {this.props.delete(this.props.account.name)}}>Delete Account</button>
                </div>
            </div>
        )
    }
}

export default Account;