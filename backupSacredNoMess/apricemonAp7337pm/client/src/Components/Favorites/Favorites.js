import React, { Component } from "react";
import { getFavs } from "../../redux/index.js";
import { connect } from "react-redux";
import FavCoins from "../FavCoins/FavCoins.js";
import axios from "axios";

class Favorites extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.getFavs()
    }

    render() {
        const mappedCoins = this.props.favList.map((coin, index) => {
            return (
                <FavCoins
                    coin={coin}
                />
            )
        })
        return (
            <div>{mappedCoins}</div>
        )
    }

}

export default connect(state => state, { getFavs })(Favorites);
