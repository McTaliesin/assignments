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
                <TodoList todos={this.state.todos}/>
            </div>
        );
    }
}

export default App;
