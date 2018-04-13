import React, {Component} from "react";
import ReactDOM from 'react-dom';
import MechComponent from "./MechComponent";
class farmer extends Component{
  constructor(){
    super();

    this.state = {
      Mechine: []
    }
  }
componentDidMount(){
  axios.get("https://api.vschool.io/kashta/todo/").then(response => {
    this.setState({Mechine: response.data})
    console.log(this.state.Mechine)
  })
}
render(){
  const allBits = this.state.todoz.map((Mechine, i) => <MechComponent
    title={MechComponent.title}
    description={MechComponent.description}
    coolInfo={MechComponent.coolInfo}
   />)

   return allBits
   }
}
export default Mechine;
