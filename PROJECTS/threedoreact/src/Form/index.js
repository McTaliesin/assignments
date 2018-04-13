import React, {Component} from "react";
import FormComponent from "./FormComponent";

class FormContainer extends Component {
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
    this.setState({ti})
  }
}


export default Form;
