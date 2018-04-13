import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Body from "./Body";
import axios from "axios";

class App extends Component {
  constructor(){
    super();
    this.state = {
      statement: "",
      chair: "",
      coins: []
    }
this.handleChange=this.handleChange.bind(this);
this.handleSubmit=this.handleSubmit.bind(this);
this.newCoin=this.newCoin.bind(this);
  }


  componentDidMount(){
    axios.get("https://api.coinmarketcap.com/v1/ticker/").then(response => {
      console.log(response.data.name);
      this.setState({
          coins: response.data
      })
    })
  }

 newCoin(){
   axios.get("https://api.coinmarketcap.com/v1/ticker/").then(response => {
     console.log(response.data.name);
     this.setState({
         coins: response.data
     })
   })
 }



  handleChange(event){

   this.setState({
     statement: event.target.value
   })
  }

  handleSubmit(event){
    event.preventDefault();
    let localstate = {
      chair: this.state.statement
    }
    this.setState(localstate)
  }


  render() {
     console.log(this.state);
     const coins = this.state.coins.map(coin => {
       return <div>The name is: {coin.name}, ---the price in USD is---: {coin.price_usd}</div>
     })
  return (

    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-ethlogo" alt="ethereum logo" />
        <img src={logo} className="App-btclogo" alt="btc logo" />
        <h1 className="App-title">Welcome to KEEP CALM AND TRY AGAIN THURSDAY</h1>
      </header>
      <h1> HODL & BUIDL </h1>
      <h2> Coins </h2>
      {coins}
      <form onSubmit={this.handleSubmit}>
        TYPE ME <input onChange={this.handleChange} /> <br/>
      <button> press button </button>
      </form>
      <button onClick={this.newDoggo}> Click 4 nu coin </button>
      {this.state.statement}
      <br />
      {this.state.chair}
     <img src={this.state.doggo} />

    </div>

  )
}

}
<script>src="Index.js"</script>


export default App;
