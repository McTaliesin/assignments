import React, { Component } from "react";
import { addPrev, removePrev } from "../../redux/index.js";
import { connect } from "react-redux";

class PrevCoins extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPrev: true
        }

    this.removeIndividCoin = this.removeIndividCoin.bind(this);
    }

    removeIndividCoin() {
        this.props.removePrev(this.props.coin._id);
        this.setState({
            isPrev: false
        })
        console.log("it worked!");
    }

    render() {

        return (
            <div>
                <h1>{this.props.coin.name}</h1>
                { this.state.isPrev ?
                    <button onClick={this.removeIndividCoin}>Remove from Previous</button>
                    :
                    <p>Removed</p>
                }
            </div>
        )
    }
}

export default connect(state => state, { addPrev, removePrev })(PrevCoins);
