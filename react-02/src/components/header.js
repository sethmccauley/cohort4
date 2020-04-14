import React from 'react';
import Cloud from './svg/cloud.js';
import SnesSVG from './svg/snes.js';
import PsSVG from './svg/ps.js';
import XboxSVG from './svg/xbox.js';
import N64SVG from './svg/n64.js';
import GameboySVG from './svg/gameboy.js';
import OneupSVG from './svg/oneup.js';

class Header extends React.Component {
    render() {
        return (
            <div>
                <br />
                <Cloud height="150px" width="150px" className="App-svg" title="Home Base" navChange={this.props.navChange} active={this.props.active}/>
                <SnesSVG height="150px" width="150px" className="App-svg" title="Tic Tac Toe" navChange={this.props.navChange} active={this.props.active}/>
                <PsSVG height="150px" width="150px" className="App-svg" title="Account Controller" navChange={this.props.navChange} active={this.props.active}/>
                <XboxSVG height="150px" width="150px" className="App-svg" title="City / Community" navChange={this.props.navChange} active={this.props.active}/>
                <N64SVG height="150px" width="150px" className="App-svg" title="Linked List" navChange={this.props.navChange} active={this.props.active}/>
                <GameboySVG height="150px" width="150px" className="App-svg" title="FIFO / LIFO" navChange={this.props.navChange} active={this.props.active}/>
                <OneupSVG height="150px" width="150px" className="App-svg" title="Theme Selector" navChange={this.props.navChange} active={this.props.active}/>
            </div>
        );
    }
}

export default Header;