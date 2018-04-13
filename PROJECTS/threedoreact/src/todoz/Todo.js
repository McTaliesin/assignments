// exactly what to do next?
import React from "react";


function Todo(props){
  return(
    <div>
     <h1>List of Must Be Dones {props.title} </h1>
     <p>Description {props.description}</p>
     <p>Price {props.price}</p>
    </div>
  );
}


export default Todo;
