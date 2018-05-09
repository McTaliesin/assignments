import React, { Component } from 'react';
import Navbar from "./Navbar";
import {Switch, Route} from "react-router-dom"
import Footer from "./Footer";
import Body from "./Body";
import Game from "./Game/Game"
import Login from "./Login"
import SignUp from "./SignUp"
import Profile from "./Profile"
import About from "./About"

class App extends Component {
  render() {
    return (
      <div className="app">
       <Navbar />
       <Switch>
         <Route exact path = "/about.js" component = {About} />
         <Route exact path = "/" component = {Body} />
         <Route exact path = "/game/game.js" component = {Game} />
         <Route exact path = "/login" component = {Login} />
         <Route exact path = "/signup" component = {SignUp} />
         <Route exact path = "/profile" component = {Profile} />
       </Switch>
       <Footer />
      </div>
    );
  }
}

export default App;
