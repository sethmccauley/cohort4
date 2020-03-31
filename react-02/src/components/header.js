import React from 'react';
import Cloud from '../components/cloud.js';
import SnesSVG from '../components/snes.js';
import PsSVG from '../components/ps.js';
import XboxSVG from '../components/xbox.js';
import { render } from '@testing-library/react';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <br />
                <Cloud height="150px" width="150px" className="App-svg" title="Home Base" navChange={this.props.navChange} active={this.props.active}/>
                <SnesSVG height="150px" width="150px" className="App-svg" title="Tic Tac Toe" navChange={this.props.navChange} active={this.props.active}/>
                <PsSVG height="150px" width="150px" className="App-svg" navChange={this.props.navChange} active={this.props.active}/>
                <XboxSVG height="150px" width="150px" className="App-svg" navChange={this.props.navChange} active={this.props.active}/>
            </div>
        );
    }
}

export default Header;