import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {




  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Welcome to Remain Calm</h1>

          <h2>And Master React</h2>
          <h3>by responding appropriately</h3>
          <p>Vini Vidi VSchool</p>
          console.log("MELLO WHIRLED!")

          <br></br>
        </header>
        <a className="cheddar">yes</a>
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="Logo2" alt="logo" />
        <p className="App-intro"></p>
      </div>
    );
  }
}

export default App;
