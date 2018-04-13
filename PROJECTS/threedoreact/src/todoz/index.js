import React, {Component} from "react";
import axios from "axios";
import Todo from "./Todo";
class TodoList extends Component{
  constructor(){
    super();

    this.state = {
      todoz: []
    }
  }
  componentDidMount(){
    axios.get("https://api.vschool.io/kashta/todo/").then(response => {
      this.setState({todoz: response.data})
      console.log(this.state.todoz)
    })
  }
  render(){
    const allToDos = this.state.todoz.map((todo, i) => <Todo
      title={todo.title}
      description={todo.description}
      price={todo.price}
     />)

    return allToDos

    }
}

export default TodoList;
