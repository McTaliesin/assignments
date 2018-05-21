import React, { Component } from "react";
import axios from "axios";
import SearchResults from "../SearchResults/SearchResults"
import Form from "../Form/Form";
import "./styles.css";

const CoinmktcapAPI = "https://api.coinmarketcap.com/v1/ticker/"
//const CoinmktcapAPI = "https://api.coinmarketcap.com/v2/global/?convert=EUR"
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
        axios.get(CoinmktcapAPI + parsedSearch)
            .then(response => {
                this.setState({
                    searchResults: response.data,
                    completedSearch: true,
                    searchInput: ""

                })
            })
    }

    render() {

        const outputMap = this.state.searchResults.map((coin, index) => {
            return (
                <SearchResults
                    name={coin.name}
                    symbol={coin.symbol}
                    priceusd={coin.price_usd}
                    pricebtc={coin.price_btc}
                    perchange24={coin.percent_change_24h}
                    id={coin._id}
                    rank={coin.rank}
                    data={coin.data}
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
