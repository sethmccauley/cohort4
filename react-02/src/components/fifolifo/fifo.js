import React, { useState } from 'react';
import { Queue } from './fifolifo-pojo';
import * as randomNames from './randomnames.json';

function Fifo(props) {
    const [localFifo, setLocalFifo] = useState(new Queue())
    const [divArray, setRenderDivs] = useState('')

    const addToFifo = () => {
        localFifo.push(randomNames.default[Math.floor(Math.random() * 42)].name)
        setRenderDivs(renderPeeps(true))
        setLocalFifo(localFifo)
    }
    const removeFromFifo = () => {
        localFifo.shift()
        setRenderDivs(renderPeeps(false))
        setLocalFifo(localFifo)
    }
    const renderPeeps = (adding) => {
        let display = localFifo.collection.map((value, i) => {
            return (<div key={i}>
                        <span style={{fontSize: '12px'}}>{value + (i === 0 ? ' is first now!' : '')} </span>
                        <i className={'fa a fa-user-o ' + (i === 0 && adding === true ? 'w3-animate-bottom' : '')}></i>
                    </div>)
        })
        return display
    }
    return(
        <div className="w3-container w3-center w3-sand w3-round-small">
            <div className="w3-padding">
                <button className="w3-button w3-small w3-pale-red" onClick={() => removeFromFifo()}>Remove Person</button>&nbsp;
                <button className="w3-button w3-small w3-deep-orange w3-ripple" onClick={() => addToFifo()}>Add a Person</button>
                <p className="w3-small">Manipulate the queue.</p>
            </div>
            <div className="w3-padding">
                {divArray}
            </div>
        </div>
    )
}

export default Fifo;