import React from 'react';

function PageToComponent(props){
    return (
        <div>
            <h5>CTemp: {props.ctemp}</h5>
            <h4>Norris: {props.norris}</h4>
            <h3>EPrice: {props.eprice}<h3>
        </div>
    )
}

export default PageToComponent;
