import React from 'react';

function Player2Name(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <label>
                Player2:
                <input
                    name="player2"
                    value{props.player2}
                    onChange={props.handleChange}
                />
            </label>
            <button>Enter Player Two Name</button>
        </form>
    )
}

export default Player2Name;
