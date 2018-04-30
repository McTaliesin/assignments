import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import axios from 'axios';
import Header from 'Header';
import Body from 'Body';
import Footer from 'Footer';
import Nav from 'Nav';


class App extends React.Component {
    render() {
        return (
            <div>
            </div>
        );
    }
}
class Header extends React.Component {
    render() {
        return (
            <header>
            </header>
        );
    }
}
class Body extends React.Component {
    render() {
        return (
            <body>
            </body>
        );
    }
}
class Footer extends React.Component {
    render() {
        return (
            <footer>
            </footer>
        );
    }
}
class Nav extends React.Component {
    render() {
        return (
            <nav>
            </nav>
        );
    }
}

React.render(<App />, document.getElementById('root'));


export default App;
