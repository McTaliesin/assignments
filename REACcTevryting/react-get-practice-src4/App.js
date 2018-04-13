import React, { Component } from 'react';
import axios from 'axios';

import TodoList from './Todos';
import FormContainer from './Form';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos: []
        }
        this.addTodo = this.addTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
    }
    
    deleteTodo(id){
        axios.delete('https://api.vschool.io/ryan/todo/' + id).then(response=>{
            this.setState(prevState=>{
                const filteredTodos = prevState.todos.filter(todo=>{
                    return todo._id !== id; 
                })
                return {todos: filteredTodos}
            })
        })
    }
    
    addTodo(todo){
        axios.post('https://api.vschool.io/ryan/todo/', todo).then(response=>{
            this.setState((prevState)=>{
                return {todos: [response.data, ...prevState.todos]}
            })
        })
    }

    componentDidMount(){
        axios.get('https://api.vschool.io/ryan/todo/').then(response=>{
            this.setState({todos: response.data})
        })
    }    
            
    render() {
        return (
            <div>
                <FormContainer addTodo={this.addTodo}/>
                <TodoList deleteTodo={this.deleteTodo} todos={this.state.todos}/>
            </div>
        );
    }
}

export default App;
