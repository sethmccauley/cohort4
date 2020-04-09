import React from 'react';
import Header from './components/header';
import Home from './components/home';
import Game from './components/game/game';
import AccountController from './components/accounts/accountController';
import Community from './components/citycommunity/community';
import LinkedListController from './components/linkedlist/linkedlistcontroller';
import FifoLifo from './components/fifolifo/fifolifo';
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
        return(<main className="App-main"><Home /></main>)
      case("game"):
        return (<main className="App-main"><Game /></main>)
      case("account"):
        return(<main className="w3-content w3-section"><AccountController /></main>)
      case("cities"):
        return(<main className="w3-content w3-section"><Community /></main>)
      case("linkedList"):
        return(<main className="App-main"><LinkedListController /></main>)
      case("fifolifo"):
        return(<main className="App-main"><FifoLifo /></main>)
      default:
        return(<main className="App-main"><Home /></main>)
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
        {this.choosePage()}
        <footer className="App-footer">
        </footer>
      </div>
    );
  }
}

export default App;
