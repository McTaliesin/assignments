import React, { Component } from 'react';
import {connect} from "react-redux";
import {addSecond} from "./redux";
//import
function App(props) {
  const containerStyles = {
    width: "100px",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifycontent: "center",
    alignItems: "center",

  }

const buttonGroupStyles = {}
    return(
        <div style={containerStyles}>
            <h1>{props.minutes}:{props.seconds}</h1>
            <div style={buttonGroupStyles}>
                <button onClick={props.start}>Start</button>
                <button onClick={props.stop}>Stop</button>
                <button onClick={props.reset}>Reset</button>
            </div>
        </div>
    );
}


export default connect(state => state, {addSecond})(App);
