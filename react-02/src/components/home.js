import React from 'react';
import { ThemeContext } from '../context/themecontext';

class Home extends React.Component {

    render() {
        return (
            <div className="homeBase">
                <ThemeContext.Consumer>
                    {({headings}) => (
                        <h1 style={{fontSize: 48, color: headings}}>Welcome to Home Base.</h1>
                    )}
                </ThemeContext.Consumer>
            </div>
        )
    }
}

export default Home;