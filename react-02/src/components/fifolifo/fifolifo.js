import React from 'react';
import Lifo from './lifo';
import Fifo from './fifo';

function FifoLifo(props) {

    return(
        <div className="w3-content w3-section" style={{minWidth: '75vw', margin: '0px auto'}}>
            <h1 style={{color: 'white'}}>FIFO / LIFO Demonstration</h1>
            <p className="w3-medium" style={{color: 'white'}}>A first-in-first-out (FIFO) queue shown first, and a Last-in-first-out (LIFO) shown second.</p>
            <div className="w3-row-padding" style={{margin: '0px auto'}}>
                <div className="w3-col s6 m6 l6" style={{minHeight: '400px'}}>
                    <h1 style={{color: 'white'}}>FIFO</h1><p className="w3-small">Similar to queueing up.</p>
                    <Fifo />
                </div>
                <div className="w3-col s6 m6 l6" style={{minHeight: '400px'}}>
                    <h1 style={{color: 'white'}}>LIFO</h1><p className="w3-small">Similar to stacking coins.</p>
                    <Lifo />
                </div>
            </div>
        </div>
    )
}

export default FifoLifo;