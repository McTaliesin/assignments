import React, {Component} from 'react';
import TodoComponent from './TodoComponent';

function TodoList(props) {
    const allTodos = props.todos.map((todo, i) => <TodoComponent
        title={todo.title}
        description={todo.description}
        price={todo.price}
    />);

    return allTodos;
}

export default TodoList;
