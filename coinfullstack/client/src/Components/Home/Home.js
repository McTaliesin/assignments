import React, { Component } from "react";
import axios from "axios";
import SearchResults from "../SearchResults/SearchResults"
import Form from "../Form/Form";
import "./styles.css";

const CoinmtkcapAPI = "https://api.coinmarketcap.com/v1/ticker/"

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
        const parsedSearch = this.state.searchInput;
        axios.get(CoinmtkcapAPI)
            .then(response => {
                this.setState({
                    searchResults: response.data.items,
                    completedSearch: true,
                    searchInput: ""

                })
            })
    }

    render() {
        
        const outputMap = this.state.searchResults.map((coin, index) => {
            return (
                <SearchResults
                    name={coin.data.name}
                    symbol={coin.data.symbol}
                    price_usd={coin.data.price_usd}
                    price_btc={coin.data.price_btc}
                    id={coin._id}
                    rank={coin.data.rank}
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
