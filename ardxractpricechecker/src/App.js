import React, { Component } from 'react';
import StuffList from './components/stuffList';


class App extends Component {
    render() {
        return (
            <div className="app">
              <h1 className="App-title">Welcome to KEEP CALM AND TRY AGAIN THURSDAY </h1>
              <h2> This is the HODL & BUIDL cryptocurrency comparison chart</h2>
                  <StuffList />

            </div>
        );
    }

}

export default App;
