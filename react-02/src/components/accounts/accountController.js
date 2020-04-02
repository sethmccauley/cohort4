import React from 'react';
import Account from './account.js';

class AccountController extends React.Component {

    render() {
        return (
            <div className="accountController">
                <h1> Account Controller will go here. </h1>
                <Account />
            </div>
        );
    }
}

export default AccountController;