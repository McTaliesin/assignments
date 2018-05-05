import React, { Component } from "react";
import { addFav, removeFav } from "../../redux/index.js";
import { connect } from "react-redux";

class FavBooks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFav: true
        }

    this.removeIndividBook = this.removeIndividBook.bind(this);
    }

    removeIndividBook() {
        this.props.removeFav(this.props.book._id);
        this.setState({
            isFav: false
        })
        console.log("it worked!");
    }

    render() {

        return (
            <div>
                <h1>{this.props.book.name}</h1>
                { this.state.isFav ?
                    <button onClick={this.removeIndividBook}>Remove from Favorites</button>
                    :
                    <p>Removed</p>
                }
            </div>
        )
    }
}

export default connect(state => state, { addFav, removeFav })(FavBooks);
