import React, { useContext } from 'react'
import { ThemeContext } from '../context/themecontext';

const ThemeSelector = () => {
    return (
        <ThemeContext.Consumer>
            {({headings, setHeadings}) => (
                <div>
                    <h1 style={{color: headings}}>Theme Manager</h1>
                    <div className='w3-content w3-section w3-border w3-round-small w3-light-grey'>
                        <h4>Heading Color: <br /><input type='color' value="#00FFCC" style={{height: '50px', width: '50px'}} onChange={(e) => setHeadings(e.target.value)}></input></h4>
                    </div>
                </div>
            )}
        </ThemeContext.Consumer>
    )
}

export default ThemeSelector;
