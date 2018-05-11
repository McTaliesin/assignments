import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Favorites from "../Favorites/Favorites";
import Home from "../Home/Home";
import {Switch, Route} from "react-router-dom";
import "./styles.css";


function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/favorites" component={Favorites} />
            </Switch>
            <Footer />
        </div>
    )
}

export default App;
