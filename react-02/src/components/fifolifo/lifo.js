import React from 'react';

function Lifo(props) {

    return(
        <div className="w3-light-blue w3-round-small">
            <div className="w3-padding">
                <button className="w3-button w3-small w3-blue-grey">Remove Coin</button> <button className="w3-button w3-small w3-deep-purple w3-ripple">Add a Coin</button>
                <p className="w3-small">Manipulate the stack.</p>
            </div>
            <div className="w3-border-grey w3-round-small" style={{minHeight: '200px'}}>

            </div>
        </div>
    )
}

export default Lifo;