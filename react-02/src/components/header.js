import React from 'react';
import Cloud from './svg/cloud.js';
import SnesSVG from './svg/snes.js';
import PsSVG from './svg/ps.js';
import XboxSVG from './svg/xbox.js';

class Header extends React.Component {
    render() {
        return (
            <div>
                <br />
                <Cloud height="150px" width="150px" className="App-svg" title="Home Base" navChange={this.props.navChange} active={this.props.active}/>
                <SnesSVG height="150px" width="150px" className="App-svg" title="Tic Tac Toe" navChange={this.props.navChange} active={this.props.active}/>
                <PsSVG height="150px" width="150px" className="App-svg" title="Account Controller" navChange={this.props.navChange} active={this.props.active}/>
                <XboxSVG height="150px" width="150px" className="App-svg" title="City / Community" navChange={this.props.navChange} active={this.props.active}/>
            </div>
        );
    }
}

export default Header;