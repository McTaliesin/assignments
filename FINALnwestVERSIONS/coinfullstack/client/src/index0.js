app.use(express.static(__dirname + '/www'));

import { BrowserRouter, Route, Link } from "react-router-dom";

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


ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
, document.getElementById("root"));
