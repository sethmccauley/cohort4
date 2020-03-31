import React from 'react';
import Header from './components/header';
import Home from './components/home';
import Game from './components/game/game';
import Ph1 from './components/ph1';
import Ph2 from './components/ph2';
import './App.css';
import { render } from '@testing-library/react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      display: "home",
    }
    this.setDisplay = this.setDisplay.bind(this)
  }

  choosePage() {
    switch (this.state.display){
      case("home"):
        return <Home />
      case("game"):
        return <Game />
      case("ph1"):
        return <Ph1 />
      case("ph2"):
        return <Ph2 />
      default:
        return <Home />
    }
  }

  setDisplay(page) {
    this.setState({
      display: page
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header active={this.state.display} navChange={this.setDisplay} />
        </header>
        <main className="App-main">
          {this.choosePage()}
        </main>
        <footer className="App-footer">
        </footer>
      </div>
    );
  }
}

export default App;
