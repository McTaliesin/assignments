const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
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
var myLogger = function (req, res, next) {
  console.log('LOGGED');

}
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

// Routes for 'fruits'
app.get("/fruit", (req, res) => {
    res.send("GET on /fruit endpoint");
});

app.post("/fruit", (req, res) => {
    res.send("POST on /fruit endpoint");
});

app.get("/fruit/:fruitId", (req, res) => {
    res.send(`GET on /fruit/${req.params.fruitId} endpoint`);
});

app.put("/fruit/:fruitId", (req, res) => {
    res.send(`PUT on /fruit/${req.params.fruitId} endpoint`);
});

app.delete("/fruit/:fruitId", (req, res) => {
    res.send(`DELETE on /fruit/${req.params.fruitId} endpoint`);
});


// Routes for 'vegetables'
app.get("/vegetable", (req, res) => {
    res.send("GET on /vegetable endpoint");
});

app.post("/vegetable", (req, res) => {
    res.send("POST on /vegetable endpoint");
});

app.get("/vegetable/:vegetableId", (req, res) => {
    res.send(`GET on /vegetable/${req.params.vegetableId} endpoint`);
});

app.put("/vegetable/:vegetableId", (req, res) => {
    res.send(`PUT on /vegetable/${req.params.vegetableId} endpoint`);
});

app.delete("/vegetable/:vegetableId", (req, res) => {
    res.send(`DELETE on /vegetable/${req.params.vegetableId} endpoint`);
});

// Run the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`,myLogger());
});
