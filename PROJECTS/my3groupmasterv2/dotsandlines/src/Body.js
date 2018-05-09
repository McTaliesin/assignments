import React from "react";
import {Link} from "react-router-dom"


function Body (){
  return (
    <div className="body">
     <h1> DOTS AND BOXES </h1>
     <div className="rulesBox">
       <div className="homeImage">
         <img className="image" src="http://cram21.com/wp-content/uploads/2017/11/fabulous-dot-to-templates-game-format-coloring-pages-351x300.jpg" />
       </div>
       <div className="rules">
         <h2> Rules of Play </h2>
         <p> Objective of the Dots and Boxes game:
    Attempting to “own” the greater number of single square boxes by the connecting of two dots with a line each turn, placing the last line necessary to form a box allows a player to take another turn as they may do until they either make a move which does not form a box or until all of the boxes are owned. </p>
       </div>
     </div>
       <Link to="./Game/Game.js">
         <img src="http://www.thelibertybeacon.com/wp-content/uploads/2015/11/PlayButtonBlue.png" />
       </Link>
    </div>
  )
}

export default Body
