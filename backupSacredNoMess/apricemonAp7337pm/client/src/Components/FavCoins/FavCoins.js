import React, { Component } from "react";
import { addFav, removeFav } from "../../redux/index.js";
import { connect } from "react-redux";

class FavCoins extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFav: true
        }

    this.removeIndividCoin = this.removeIndividCoin.bind(this);
    }

    removeIndividCoin() {
        this.props.removeFav(this.props.coin._id);
        this.setState({
            isFav: false
        })
        console.log("it worked!");
    }

    render() {

        return (
            <div>
                <h1>{this.props.coin.name}</h1>
                { this.state.isFav ?
                    <button onClick={this.removeIndividcoin}>Remove from Favorites</button>
                    :
                    <p>Removed</p>
                }
            </div>
        )
    }
}

export default connect(state => state, { addFav, removeFav })(FavCoins);
