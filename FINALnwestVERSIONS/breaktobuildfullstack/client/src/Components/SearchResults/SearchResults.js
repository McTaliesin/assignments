import React, { Component } from "react";
import "./styles.css";
import { addFav } from "../../redux/index.js";
import { connect } from "react-redux";

class SearchResults extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isFav: false,
            bookId: this.props.id
        }
        this.reduxAddFav = this.reduxAddFav.bind(this);
    }


    reduxAddFav() {
        this.props.addFav(this.state.bookId, this.props.name)
        this.setState({
            isFav: true
        });
    }

    render() {
        return (
            <div className="searchFrame">
                <h1>{this.props.name}</h1>
                <p>{this.props.symbol}</p>
                <p>{this.props.price_usd}</p>
                <p>{this.props.price_btc}</p>
                <div>
                { this.state.isFav ?
                    <p>Favorited</p>
                    :
                    <button onClick={this.reduxAddFav}>Add to Favorites</button>
                }
                </div>
            </div>
        )
    }
}

export default connect(null, {addFav })(SearchResults);
