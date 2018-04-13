import React from 'react';

function TodoComponent(props){
    return (
        <div>
            <h1>Title: {props.info.title}</h1>
            <p>Description: {props.info.description}</p>
            <p>Price: {props.info.price}</p>
            <button onClick={()=>props.handleDelete(props.info._id)} >Delete</button>
        </div>
    )
}

export default TodoComponent;
