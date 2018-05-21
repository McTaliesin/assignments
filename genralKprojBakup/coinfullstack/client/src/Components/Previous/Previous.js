import React, { Component } from "react";
import { getPrev } from "../../redux/index.js";
import { connect } from "react-redux";
import PrevCoins from "../PrevCoins/PrevCoins.js";
import axios from "axios";

class Previous extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.getPrev()
    }

    render() {
        const mappedCoins = this.props.prevList.map((coin, index) => {
            return (
                <PrevCoins
                    coin={coin}
                />
            )
        })
        return (
            <div>{mappedCoins}</div>
        )
    }

}

export default connect(state => state, { getPrev })(Previous);
