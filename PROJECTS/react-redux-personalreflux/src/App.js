import React, { Component } from 'react';
import axios from 'axios';
import PageOneContainer from './PageOneContainer';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props){
    this.state = {
      alight: []
    }
    this.add
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Reflux</h1>
          <p> REMAIN CALM </p>
          <p>AND JUST KEEP CODING</p>
        </header>
        <p className="App-intro">
          indegestion is natural nooby so just keep coding. <br/>
        there's crypto inthe code and you didn't even know it see <br/>
      integrity : sha512-arn53F07VXmls4o4pUhSzBa4fvaagPRe7AVZ8l7NHxFWUie2DsuFSBMMNAkgzRlOhEhzAnxeKyaWVzOH4xqp<br/>
          yeah baby, sha512 thats gotta be like twice sha256  but i wouldn't trust anything under4096 bit encryption.
            look inthe packagelock json filez ive had to concatenate here so as not to misuse keywords Lol
        </p>
      </div>
    );
  }
}

export default App;
