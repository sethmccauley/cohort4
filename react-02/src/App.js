import React from 'react';
import Header from './components/header';
import Home from './components/home';
import Game from './components/game/game';
import AccountController from './components/accounts/accountController';
import Community from './components/citycommunity/community';
import './App.css';
import './w3.css';

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
        return( 
        <main className="App-main">
          <Home />
        </main>)
      case("game"):
        return (
        <main className="App-main">
          <Game />
        </main>)
      case("account"):
        return <AccountController />
      case("xbox"):
        return <Community />
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
        <main className="w3-content w3-section">
          {this.choosePage()}
        </main>
        <footer className="App-footer">
        </footer>
      </div>
    );
  }
}

export default App;
