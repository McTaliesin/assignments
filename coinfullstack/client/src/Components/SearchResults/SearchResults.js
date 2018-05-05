import React, { Component } from "react";
import "./styles.css";
import { addPrev } from "../../redux/index.js";
import { connect } from "react-redux";

class SearchResults extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isPrev: false,
            coinId: this.props.id
        }
        this.reduxAddPrev = this.reduxAddPrev.bind(this);
    }


    reduxAddPrev() {
        this.props.addPrev(this.state.coinId, this.props.name)
        this.setState({
            isPrev: true
        });
    }

    render() {
        return (
            <div className="searchFrame">
                <h1>{this.props.name}</h1>
                <p>{this.props.symbol}</p>
                <p>{this.props.rank}</p>
                <p>{this.props.price_usd}</p>
                <div>
                { this.state.isPrev ?
                    <p>Previoused</p>
                    :
                    <button onClick={this.reduxAddPrev}>Add to Previous</button>
                }
                </div>
            </div>
        )
    }
}

export default connect(null, {addPrev })(SearchResults);
