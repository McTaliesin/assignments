import React from "react";



function MechComponent(props){
  return(
    <div>
    <h1>Three Sovereigns {props.} </h1>
    <p>Description {props.description}</p>
    <p>Price {props.price}</p>
  );
}


export default MechComponent;
