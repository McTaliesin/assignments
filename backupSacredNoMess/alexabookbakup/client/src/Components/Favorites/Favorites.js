import React, { Component } from "react";
import { getFavs } from "../../redux/index.js";
import { connect } from "react-redux";
import FavBooks from "../FavBooks/FavBooks.js";
import axios from "axios";

class Favorites extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.getFavs()
    }

    render() {
        const mappedBooks = this.props.favList.map((book, index) => {
            return (
                <FavBooks
                    book={book}
                />
            )
        })
        return (
            <div>{mappedBooks}</div>
        )
    }

}

export default connect(state => state, { getFavs })(Favorites);
