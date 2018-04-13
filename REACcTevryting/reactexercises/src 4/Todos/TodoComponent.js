import React from 'react';

function TodoComponent(props){
    return (
        <div>
            <h1>Title: {props.title}</h1>
            <p>Description: {props.description}</p>
            <p>Price: {props.price}</p>
        </div>
    )
}

export default TodoComponent;
