import React, {Component} from "react";


class Game  extends Component{
  constructor(){
      super()
      this.state = {
        firstPlayerInitial: "P1",
        secondPlayerInitial: "P2",
        currentPlayerInitial: "P1",
        currentTurn: "Player 1's Turn",
        firstPlayerScore: 0,
        secondPlayerScore: 0,
        counter: 1,
      }
      this.enter = this.enter.bind(this)
      this.clicked = this.clicked.bind(this)
      this.reset = this.reset.bind(this)
  }

  enter(e){
    e.preventDefault()
    var div = document.querySelector(`div.${this.state.currentRow} input.${this.state.currentSquare}`)

    if(div !== null){
      var p1CurrentScore = this.state.firstPlayerScore;
      var p2CurrentScore = this.state.secondPlayerScore;
      var rowNumber = this.state.currentRow.split('')[1];
      var columnNumber = this.state.currentSquare.split('')[5]
      var divBottom = document.querySelector(`div.r${Number(rowNumber) + Number(1)} input.col.c${columnNumber}`)
      var divTop = document.querySelector(`div.r${Number(rowNumber) - Number(1)} input.col.c${columnNumber}`)
      var divLeft = document.querySelector(`div.r${rowNumber} input.col.c${Number(columnNumber) - Number(1)}`)
      var divRight = document.querySelector(`div.r${rowNumber} input.col.c${Number(columnNumber) + Number(1)}`)
      var scoreBonusChecker = false;
      const blackBorder = "10px solid black";
      const blueBorder = "10px solid blue";
      const redBorder = "10px solid red"



      if(div.style.borderTop === blueBorder || div.style.borderTop === redBorder) {
        div.style.borderTop = blackBorder;
        if(rowNumber > 1) {
          rowNumber --;
          document.querySelector(`div.r${rowNumber} input.col.c${columnNumber}`).style.borderBottom = blackBorder;
        }
      }

      if(div.style.borderLeft === blueBorder || div.style.borderLeft === redBorder) {
        div.style.borderLeft = blackBorder;
        if(columnNumber > 1) {
          columnNumber --;
          document.querySelector(`div.r${rowNumber} input.col.c${columnNumber}`).style.borderRight = blackBorder;
        }
      }
      if(div.style.borderRight === blueBorder || div.style.borderRight === redBorder) {
        div.style.borderRight = blackBorder;
        if(columnNumber < 5){
          columnNumber ++;
          document.querySelector(`div.r${rowNumber} input.col.c${columnNumber}`).style.borderLeft = blackBorder;
        }
      }

      if(div.style.borderBottom === blueBorder || div.style.borderBottom === redBorder) {
        div.style.borderBottom = blackBorder;
        if(rowNumber < 5){
          rowNumber ++;
          document.querySelector(`div.r${rowNumber} input.col.c${columnNumber}`).style.borderTop = blackBorder;
        }
      }

      if(div.style.borderRight === blackBorder && div.style.borderBottom === blackBorder && div.style.borderLeft === blackBorder && div.style.borderTop === blackBorder ){
        div.value = this.state.currentPlayerInitial;
        if(this.state.currentPlayerInitial === "P1"){
          div.style.backgroundColor = "Blue"
        } else {
          div.style.backgroundColor = "Red"
        }

        if(divTop !== null){
          if( ((divTop.style.borderRight === blackBorder && divTop.style.borderBottom === blackBorder && divTop.style.borderLeft === blackBorder && divTop.style.borderTop === blackBorder ) || divTop.style.border === blackBorder ) && divTop.value !== "P1" && divTop.value !== "P2" ){
            divTop.value = this.state.currentPlayerInitial;
              if(this.state.currentPlayerInitial === "P1"){
                divTop.style.backgroundColor = "Blue"
              } else {
                divTop.style.backgroundColor = "Red"
              }
            scoreBonusChecker = true;
        }}
        if(divBottom !== null){
          if( ((divBottom.style.borderRight === blackBorder && divBottom.style.borderBottom === blackBorder && divBottom.style.borderLeft === blackBorder && divBottom.style.borderTop === blackBorder) || divBottom.style.Border === blackBorder ) && divBottom.value !== "P1" && divBottom.value !== "P2" ){
            divBottom.value = this.state.currentPlayerInitial;
              if(this.state.currentPlayerInitial === "P1"){
                divBottom.style.backgroundColor = "Blue"
              } else {
                divBottom.style.backgroundColor = "Red"
              }
          scoreBonusChecker = true;
        }}

        if(divLeft!== null) {
          if( ((divLeft.style.borderRight === blackBorder && divLeft.style.borderBottom === blackBorder && divLeft.style.borderLeft === blackBorder && divLeft.style.borderTop === blackBorder) || divLeft.style.border === blackBorder) && divLeft.value !== "P1" && divLeft.value !== "P2" ){
            divLeft.value = this.state.currentPlayerInitial;
            if(this.state.currentPlayerInitial === "P1"){
              divLeft.style.backgroundColor = "Blue"
            } else {
              divLeft.style.backgroundColor = "Red"
            }
          scoreBonusChecker = true;
        }}

        if(divRight !== null){
          if( ((divRight.style.borderRight === blackBorder && divRight.style.borderBottom === blackBorder && divRight.style.borderLeft === blackBorder && divRight.style.borderTop === blackBorder) || divRight.style.border === blackBorder ) && divRight.value !== "P1" && divRight.value !== "P2" ){
            divRight.value = this.state.currentPlayerInitial;
            if(this.state.currentPlayerInitial === "P1"){
              divRight.style.backgroundColor = "Blue"
            } else {
              divRight.style.backgroundColor = "Red"
            }
          scoreBonusChecker = true;
        }}

        if(this.state.currentPlayerInitial === "P1") {
          if(scoreBonusChecker){
            this.setState(prevstate => {
              return {
                firstPlayerScore: prevstate.firstPlayerScore + 2 }
              })
          p1CurrentScore = p1CurrentScore + 2

          } else {
            this.setState(prevstate => {
              return { firstPlayerScore: prevstate.firstPlayerScore + 1 }
              })
            p1CurrentScore = p1CurrentScore + 1
          }
        } else if (this.state.currentPlayerInitial === "P2"){
          if(scoreBonusChecker) {
            this.setState(prevstate => {
              return {
                secondPlayerScore: prevstate.secondPlayerScore + 2
              }
          })
          p2CurrentScore = p2CurrentScore + 2;

          } else {
            this.setState(prevstate => {
              return {
                secondPlayerScore: prevstate.secondPlayerScore + 1
              }
            })
            p2CurrentScore = p2CurrentScore + 1
          }
        }


      } else {
        if(this.state.currentPlayerInitial === "P1"){
          this.setState(prevstate => {
            return {
              currentTurn: "Player 2's Turn",
              currentPlayerInitial: "P2"
            }
          })
        }
        if(this.state.currentPlayerInitial === "P2"){
          this.setState(prevstate => {
            return {
              currentTurn: "Player 1's Turn",
              currentPlayerInitial: "P1"
            }
          })
        }
      }

    } else {
      alert("You must select a Square!");
    }

    if(p1CurrentScore + p2CurrentScore >= 25){
      if(p1CurrentScore > p2CurrentScore){
        alert("Player 1 Wins!");
      } else {
        alert("Player 2 Wins!");
      }
    }
    scoreBonusChecker = false;
    let allBoxes = document.querySelectorAll(`.col`)
    for(let i = 0; i < allBoxes.length; i++){
      if( (allBoxes[i].style.borderLeft === "10px solid blue" || allBoxes[i].style.borderTop === "10px solid blue" || allBoxes[i].style.borderRight === "10px solid blue" || allBoxes[i].style.borderBottom === "10px solid blue" )
      || (allBoxes[i].style.borderLeft === "10px solid red" || allBoxes[i].style.borderTop === "10px solid red" || allBoxes[i].style.borderRight === "10px solid red" || allBoxes[i].style.borderBottom === "10px solid red" )) {

        if(allBoxes[i].style.borderTop !== "10px solid black"){
          allBoxes[i].style.borderTop = "4px solid white"
        }
        if(allBoxes[i].style.borderLeft !== "10px solid black"){
          allBoxes[i].style.borderLeft = "4px solid white"
        }
        if(allBoxes[i].style.borderBottom !== "10px solid black"){
          allBoxes[i].style.borderBottom = "4px solid white"
        }
        if(allBoxes[i].style.borderRight !== "10px solid black"){
          allBoxes[i].style.borderRight = "4px solid white"
        }
    }
  }
}


  reset(e){
    e.preventDefault();
    this.setState({
      firstPlayerInitial: "P1",
      secondPlayerInitial: "P2",
      currentPlayerInitial: "P1",
      currentTurn: "Player 1's Turn",
      firstPlayerScore: 0,
      secondPlayerScore: 0,
      counter: 1,
    })
    let allBoxes = document.querySelectorAll(`.col`)
    for(let i = 0; i < allBoxes.length; i++){
      allBoxes[i].style.border = "4px solid white"
      allBoxes[i].style.backgroundColor = 'rgba(205, 68, 100, .3)';
      allBoxes[i].value = "";
    }
  }



  clicked(e){
    const blackBorder = "10px solid black"
    const blueBorder ="10px solid blue"
    const redBorder = "10px solid red"
      e.preventDefault()
    if(this.state.counter === 1) {
      if(e.target.style.borderTop !== blackBorder){
        if(e.target.style.borderLeft !== blackBorder){
          e.target.style.borderLeft = ""
        }
        if(e.target.style.borderRight !== blackBorder){
          e.target.style.borderRight = ""
        }
        if(e.target.style.borderBottom !== blackBorder){
          e.target.style.borderBottom = ""
        }

        if(this.state.currentPlayerInitial === "P1"){
          e.target.style.borderTop = blueBorder
        } else {
          e.target.style.borderTop = redBorder
        }
      }

      }
    if(this.state.counter === 2) {
      if(e.target.style.borderRight !== blackBorder){
        if(e.target.style.borderLeft !== blackBorder){
          e.target.style.borderLeft = ""
        }
        if(e.target.style.borderTop !== blackBorder){
          e.target.style.borderTop = ""
        }
        if(e.target.style.borderBottom !== blackBorder){
          e.target.style.borderBottom = ""
        }
        if(this.state.currentPlayerInitial === "P1"){
          e.target.style.borderRight = blueBorder
        } else {
          e.target.style.borderRight = redBorder
        }
      }
    }
    if(this.state.counter === 3) {
      if(e.target.style.borderBottom !== blackBorder){
        if(e.target.style.borderLeft !== blackBorder){
          e.target.style.borderLeft = ""
        }
        if(e.target.style.borderRight !== blackBorder){
          e.target.style.borderRight = ""
        }
        if(e.target.style.borderTop !== blackBorder){
          e.target.style.borderTop = ""
        }
        if(this.state.currentPlayerInitial === "P1"){
          e.target.style.borderBottom = blueBorder
        } else {
          e.target.style.borderBottom = redBorder
        }
      }
    }
    if(this.state.counter === 4) {
      if(e.target.style.borderLeft !== blackBorder){
        if(e.target.style.borderTop !== blackBorder){
          e.target.style.borderTop = "";
        }
        if(e.target.style.borderRight !== blackBorder){
          e.target.style.borderRight = "";
        }
        if(e.target.style.borderBottom !== blackBorder){
          e.target.style.borderBottom = "";
        }
        if(this.state.currentPlayerInitial === "P1"){
          e.target.style.borderLeft = blueBorder
        } else {
          e.target.style.borderLeft = redBorder
        }
      }
    }
    if(this.state.counter > 4){
      this.setState({ counter: 0 })

      if(e.target.style.borderLeft !== blackBorder){
         e.target.style.borderLeft = "";
        }
        if(e.target.style.borderRight !== blackBorder){
          e.target.style.borderRight = "";
        }
        if(e.target.style.borderBottom !== blackBorder){
          e.target.style.borderBottom = "";
        }
        if(e.target.style.borderTop !== blackBorder){
          e.target.style.borderTop = "";
        }
    }
    this.setState(prevstate => {
      return {
        counter: prevstate.counter + 1
      }
    })

   var modClassName = e.target.className;
   modClassName = modClassName.replace(' ', '.')
   this.setState({
     currentSquare: modClassName,
     currentRow: e.target.name
   })
  }


  render(){
    return (
      <div className="body">
        <form className="row-container" onSubmit={this.enter}>
          <div id="r1" className="row r1">
            <input  type="button" name="r1" onClick={this.clicked}className="col c1"></input>
            <input  type="button" name="r1" onClick={this.clicked}className="col c2"></input>
            <input  type="button" name="r1" onClick={this.clicked}className="col c3"></input>
            <input  type="button" name="r1" onClick={this.clicked}className="col c4"></input>
            <input  type="button" name="r1" onClick={this.clicked}className="col c5"></input>
          </div>
          <div className="row r2">
            <input  type="button" name="r2" onClick={this.clicked}className="col c1"></input>
            <input  type="button" name="r2" onClick={this.clicked}className="col c2"></input>
            <input  type="button" name="r2" onClick={this.clicked}className="col c3"></input>
            <input  type="button" name="r2" onClick={this.clicked}className="col c4"></input>
            <input  type="button" name="r2" onClick={this.clicked}className="col c5"></input>
          </div>
          <div className="row r3">
            <input  type="button" name="r3" onClick={this.clicked}className="col c1"></input>
            <input  type="button" name="r3" onClick={this.clicked}className="col c2"></input>
            <input  type="button" name="r3" onClick={this.clicked}className="col c3"></input>
            <input  type="button" name="r3" onClick={this.clicked}className="col c4"></input>
            <input  type="button" name="r3" onClick={this.clicked}className="col c5"></input>
          </div>
          <div className="row r4">
            <input  type="button" name="r4" onClick={this.clicked}className="col c1"></input>
            <input  type="button" name="r4" onClick={this.clicked}className="col c2"></input>
            <input  type="button" name="r4" onClick={this.clicked}className="col c3"></input>
            <input  type="button" name="r4" onClick={this.clicked}className="col c4"></input>
            <input  type="button" name="r4" onClick={this.clicked}className="col c5"></input>
          </div>
          <div className="row r5">
            <input  type="button" name="r5" onClick={this.clicked}className="col c1"></input>
            <input  type="button" name="r5" onClick={this.clicked}className="col c2"></input>
            <input  type="button" name="r5" onClick={this.clicked}className="col c3"></input>
            <input  type="button" name="r5" onClick={this.clicked}className="col c4"></input>
            <input  type="button" name="r5" onClick={this.clicked}className="col c5"></input>
          </div>
          <div className="scoreAndButton">
            <h3 style={{color: 'blue'}}> {this.state.firstPlayerScore} </h3>
            <div className="buttonDiv">
              <button className="button" onSubmit={this.enter}> {this.state.currentTurn} </button>
              <button className="resetButton" onClick={this.reset}> Reset </button>
            </div>
          <h3 style={{color: 'red'}}> {this.state.secondPlayerScore} </h3>
          </div>
        </form>
      </div>
    )
  }
}

export default Game;
