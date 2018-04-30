
import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
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
     //const App = ({ children }) => (

         const coins = this.state.coins.map(coin => {
           return <div>The name is: {coin.name}, ---the price in USD is---: {coin.price_usd}</div>
         })
       return (

        <div>

          <header className="App-header">
          
            <h1 className="App-title">Welcome to KEEP CALM AND TRY AGAIN THURSDAY </h1>

          </header>
          <h1> This is the HODL & BUIDL cryptocurrency comparison chart</h1>
          <h2> Coins </h2>
          {coins}
          <form onSubmit={this.handleSubmit}>
            TYPE ME <input onChange={this.handleChange} /> <br/>
          <button> press button </button>
          </form>
          <button onClick={this.coin}> Click 4 nu coin </button>
          {this.state.statement}
          <br />
          {this.state.chair}

          <Header />

          <main>
            {children}
          </main>

          <Footer />

        </div>
    // );
  )
}

}
<script>src="Index.js"</script>


export default App;
