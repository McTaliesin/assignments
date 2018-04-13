import React, { Component } from 'react';
//framewok for class based component with state
import axios from 'axios';



class App extends Component{
  constructor(){
    super();

    this.state = {

      axios.get("https://api.vschool.io/kashta/todo/").then(function(response) {
  var todoList = response.data;

}


    render(){
        return(
            <div>Hello whirled</div>
        );
    }
}
export default App;
