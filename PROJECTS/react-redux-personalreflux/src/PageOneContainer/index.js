import React, {Component} from "react";
import PageOneComponent from "./PageOneComponent";

class PageOneContainer extends Component {
    constructor(){
        super();
        this.state = {
            title: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({title: ""});
    }

    render(){
        return (
            <PageOneComponent
                title={this.state.title}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
            />
        )
    }
}

export default PageOneContainer;
