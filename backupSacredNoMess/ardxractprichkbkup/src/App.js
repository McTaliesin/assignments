import React, { Component } from 'react';
import StuffList from './components/stuffList';

var divStyle = {
    color: "slategrey",
    background: "lightgrey"
};
var divTitle = {
    color: "lime",
    background: "slategrey"
};
var divBox = {
    height: "20px",
    width: "800px"
}
class App extends Component {
    render() {
        return (
            <div className="app" ><div style={divStyle}>
              <h1 className="App-title" >Welcome to KEEP CALM AND TRY AGAIN THURSDAY </h1>
              <div style={divBox}>
                  <div onClick="window.open('http://www.nakamotoinstitute.org/bitcoin/');">Bitcoin:
                  A Peer-to-Peer Electronic Cash System
                  Satoshi Nakamoto
                  October 31, 2008
                  </div>
              </div>
              <h2> <div style={divTitle}>This is the HODL & BUIDL cryptocurrency comparison chart</div></h2>
                  <StuffList />
              </div>
            </div>
        );
    }

}
export default App;
