import React, { Component } from "react";
import Body from "./Body";
import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";
import axios from "axios";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="Header">
          <h1 className="title" Welcome to Git Back Up And Ride></h1>
          console.log("TITLE WORKS SO FAR SO GOOD!");
        </header>
          <a className="brasilTestImg">Maybe Brasil</a>
            <img src="/Users/tayinchool/dev/assignments/mySANDBOX/gitbackup/brasilGQ copy.jpeg">
      </div>
    )
  }
}

class HellWorld extends React.Component {
    render() {
      return(
        <p>Hello Beautiful Whirled</p>
      )
    }
}




export default App;
