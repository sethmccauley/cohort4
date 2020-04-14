import React from 'react';
import Lifo from './lifo';
import Fifo from './fifo';
import { ThemeContext } from '../../context/themecontext';

function FifoLifo(props) {

    return(
        <ThemeContext.Consumer>
            {({headings}) => (
                <div className="w3-content w3-section" style={{minWidth: '75vw', margin: '0px auto'}}>
                    <h1 style={{color: headings}}>FIFO / LIFO Demonstration</h1>
                    <p className="w3-medium" style={{color: 'white'}}>A first-in-first-out (FIFO) queue shown first, and a Last-in-first-out (LIFO) shown second.</p>
                    <div className="w3-row-padding" style={{margin: '0px auto'}}>
                        <div className="w3-col s6 m6 l6" style={{minHeight: '400px'}}>
                            <h1 style={{color: headings}}>FIFO</h1><p className="w3-small">Similar to queueing up.</p>
                            <Fifo />
                        </div>
                        <div className="w3-col s6 m6 l6" style={{minHeight: '400px'}}>
                            <h1 style={{color: headings}}>LIFO</h1><p className="w3-small">Similar to stacking coins.</p>
                            <Lifo />
                        </div>
                    </div>
                </div>
            )}
        </ThemeContext.Consumer>
    )
}

export default FifoLifo;