import React, { Component } from "react";
import "./styles.css";
import { addPrev } from "../../redux/index.js";
import { connect } from "react-redux";
let d = new Date();
let theMonth = d.getMonth();
let theDay = d.getDate();
let theYear = d.getFullYear();
let theHour = d.getHours();
let theMinu = d.getMinutes();
let showtime = (" At " + theHour + ":" + theMinu + " PST On " + (theMonth+1) + "/" + theDay + "/" + theYear);
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

                <h1>{this.props.name} </h1>
                {this.props.symbol} is ranked #{this.props.rank},
                  Percent change last 24 hrs is %{this.props.perchange24},
                  The price in USD is now ${this.props.priceusd},
                  The price in bitcoin {this.props.pricebtc} ,{showtime}
                {this.props.id}
                {this.props.data}
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
