import React from 'react';

function Fifo(props) {

    return(
        <div className="w3-container w3-center w3-sand w3-round-small">
            <div className="w3-padding">
                <button className="w3-button w3-small w3-pale-red">Remove Person</button> <button className="w3-button w3-small w3-deep-orange w3-ripple">Add a Person</button>
                <p className="w3-small">Manipulate the queue.</p>
            </div>
            <div className="w3-padding">
                
                <i className="fa a fa-user-o fa-2x w3-animate-fading w3-animate-left"></i><br />
                <i className="fa a fa-user-o fa-2x w3-animate-fading w3-animate-left"></i>
            </div>
        </div>
    )
}

export default Fifo;