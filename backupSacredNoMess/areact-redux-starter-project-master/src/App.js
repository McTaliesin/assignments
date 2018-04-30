import React, { Component } from 'react';
import StuffList from './components/stuffList';

import styles from './css/styles.css';
console.log(styles);

class App extends Component {
    render() {
        return (
            <div className="app">
                <header>
                    <h1 className="App-title">Welcome to KEEP CALM AND TRY AGAIN THURSDAY
                       every day is thursday
                     This is the HODL & BUIDL cryptocurrency comparison chart</h1>
                </header>
                    <StuffList />

            </div>
        );
    }

}

export default App;
