import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


import { BrowserRouter } from "react-router-dom";



// Need to import Switch and Route
import { Switch, Route } from "react-router-dom";

// Import the Navbar and Footer, which will always be on the screen:
import Navbar from "./Navbar";
import Footer from "./Footer";

// Also need to import our components representing the
// different options for the main content of the site
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import Services from "./views/Services";

// Here's the main App component. It doesn't have
// state, so it can be a stateless functional component:

function App () {
    return (
        <div>
            <Navbar/>  {/*This is outside Switch, so it will always render*/}
            <Switch>
                <Route path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/services" component={Services}/>
            </Switch>
            <Footer/>  {/*This is outside Switch, so it will always render*/}
        </div>
    )
}

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
, document.getElementById("root"));
