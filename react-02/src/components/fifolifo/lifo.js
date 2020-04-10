import React, { useState } from 'react';
import { Stack } from './fifolifo-pojo';

function Lifo() {

    const [localLifo, setLocalLifo] = useState(new Stack())
    const [divArray, setRenderDivs] = useState('')

    const addToLifo = () => {
        localLifo.push()
        setRenderDivs(renderDivs(true))
        setLocalLifo(localLifo)
    }
    const removeFromLifo = () => {
        localLifo.pop()
        setRenderDivs(renderDivs(false))
        setLocalLifo(localLifo)
    }
    const renderDivs = (adding) => {
        let display = localLifo.collection.map((value, i) => {
            return (<div 
                    className={'w3-round-small ' + (i === 0 && adding === true ? 'w3-animate-right' : '')}
                    style={{minHeight: '13px', maxHeight: '16px', width: '65px', margin: '1px auto', backgroundColor: '#cc9900', border: '1px solid black', lineHeight: '4px'}}
                    key={localLifo.collection.length - i}
                    >
                        <span style={{fontSize: '10px'}}>{localLifo.collection.length - i}</span>
                    </div>)
        })
        return display
    }

    return(
        <div className="w3-light-blue w3-round-small">
            <div className="w3-padding">
                <button className="w3-button w3-small w3-blue-grey" onClick={() => removeFromLifo()}>Remove Coin</button> <button className="w3-button w3-small w3-deep-purple w3-ripple" onClick={() => addToLifo()}>Add a Coin</button>
                <p className="w3-small">Manipulate the stack.</p>
            </div>
            <div className="w3-padding">
                {divArray}
            </div>
        </div>
    )
}

export default Lifo;