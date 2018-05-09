import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Previous from "../Previous/Previous";
import Home from "../Home/Home";
import {Switch, Route} from "react-router-dom";
import "./styles.css";

function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/previous" component={Previous} />
            </Switch>
            <Footer />
        </div>
    )
}

export default App;
