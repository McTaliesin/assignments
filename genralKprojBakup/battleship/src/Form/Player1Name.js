import React from 'react';

function Player1Name(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <label>
                Player1:
                <input
                    name="player1"
                    value{props.player1}
                    onChange={props.handleChange}
                />
            </label>
            <button>Enter Player One Name</button>
        </form>
    )
}

export default Player1Name;
