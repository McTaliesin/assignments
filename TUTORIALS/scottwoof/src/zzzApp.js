import React, {Component} from "react";
import Body from "./Body";
import axios from "axios";


class App extends Component {
  constructor(){
    super();
    this.state = {
      statement: "",
      chair: "",
      doggo: ""
    }
this.handleChange=this.handleChange.bind(this);
this.handleSubmit=this.handleSubmit.bind(this);
this.newDoggo=this.newDoggo.bind(this);
  }

  componentDidMount(){
    axios.get("https://dog.ceo/api/breeds/image/random").then(response => {
      console.log(response.data.message);
      this.setState({
          doggo: response.data.message
      })
    })
  }

 newDoggo(){
   axios.get("https://dog.ceo/api/breeds/image/random").then(response => {
     console.log(response.data.message);
     this.setState({
         doggo: response.data.message
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
  return (
    <div>
      <h1> Hello Friends </h1>
      <h2> mice </h2>
      <form onSubmit={this.handleSubmit}>
        TYPE ME <input onChange={this.handleChange} /> <br/>
      <button> press button </button>
      </form>
      <button onClick={this.newDoggo}> Click 4 nu doggo plz </button>
      {this.state.statement}
      <br />
      {this.state.chair}
     <img src={this.state.doggo} />

    </div>

  )
}

}



export default App;
