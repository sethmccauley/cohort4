import React from 'react';
import Cloud from './components/cloud.js';
import SnesSVG from './components/snes.js';
import PsSVG from './components/ps.js';
import XboxSVG from './components/xbox.js';
import logo, { ReactComponent } from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <div style={{backgroundColor: '#282c34'}}>
          <br />
          <Cloud height="150px" width="150px" className="App-svg" />
          <SnesSVG height="150px" width="150px" className="App-svg" />
          <PsSVG height="150px" width="150px" className="App-svg" />
          <XboxSVG height="150px" width="150px" className="App-svg" />
        </div>
        <header className="App-header">
          <img src={logo} className="App-logo-anti" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
