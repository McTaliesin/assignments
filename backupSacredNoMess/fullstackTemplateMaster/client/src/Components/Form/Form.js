import React from "react";
import "./styles.css";

function Form(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <input
                className="input"
                type="text"
                onChange={props.handleChange}
                value={props.values.searchInput}
                placeholder="Enter a title, author, or ISBN #"
            />
            <input className="button" type="submit"/>
        </form>
    )
}

export default Form;
