import React, { Component } from "react";
import axios from "axiox";

import Form from "./form";
import FormContainer from "./form";
import Todoz from "./todoz";
function App(){
  return(

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todoz: []
    }
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(todo){
      axios.post("https://api.vschool.io/kashta/todo/", todo).then(response => {
        this.setState((prevState)=>{
          return {todoz: [response.data, ...prevState.todos]}
        })
      })
  }

  componentDidMount(){
    axios.get(" https://api.coinmarketcap.com/v1/ticker/").then(response=>{
      this.setState({todos: response.data})
    })
  }
  render(){
      return (
        <div>
          <FormContainer addTodo={this.addTodo}/>
          <TodoList todoz={this.state.todoz}/>
        </div>
      );
  }
}

export default App;
