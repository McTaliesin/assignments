import React, { Component } from "react";
import axios from "axios";
import SearchResults from "../SearchResults/SearchResults"
import Form from "../Form/Form";
import "./styles.css";


const CoinAPI = "https://api.coinmarketcap.com/v2/ticker/?limit=10";
console.log("check 1");

class Home extends Component {
    constructor() {
        super()
        this.state = {
            searchResults: [],
            searchInput: "",
            completedSearch: false,
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        console.log(this.state.searchResults);
    }


    handleChange(e) {
        e.persist();
        this.setState({
            searchInput: e.target.value
        })
    }

    handleSubmit(e) {
        console.log("submitted");
        e.preventDefault();
        const parsedSearch = this.state.searchInput.split(" ").join("+");
        axios.get(CoinAPI)
            .then(response => {
                this.setState({
                    searchResults: response.data.name,
                    completedSearch: true,
                    searchInput: ""

                })
            })
    }

    render() {
        if (this.state.searchResults.length === 0) {
            console.log("it's null");
        } else {
            console.log(this.state.searchResults);
        }
        const outputMap = this.state.searchResults.map((name, index) => {
            return (
                <SearchResults
                    name={this.data.name}
                    symbol={this.data.symbol}
                    id={this.data._id}
                    rank={this.data.rank}
                    

                />
            )
        })


        return (
            <div className="formBox">
                <Form
                    className="form"
                    values={this.state}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
                <div>{outputMap}</div>
            </div>
        )
    }
}
export default Home;
