import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Gallery from "./Gallery";

let urls = [
    "src/Gallery/ada.jpg",
    "src/Gallery/baktoback.jpeg",
    "src/Gallery/brasilGQ2.jpeg",
    "src/Gallery/couple.jpeg",
    "src/Gallery/happy.jpg",
    "src/Gallery/oxus.jpg",
    "src/Gallery/pagrovia1.jpg"
];

ReactDOM.render(<Gallerey imageUrls={urls} />, document.getElementById("mount"));

ReactDOM.render(<App />, document.getElementById('root'));
