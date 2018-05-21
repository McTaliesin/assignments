import React from "react";
import "./styles.css";
import {Link} from "react-router-dom";


function Header() {
    return (
        <div className="headerBar">
            <Link className="headerLink" to="/">Currencies</Link>
            <p></p>
            <Link className="headerLink" to="/previous">Previous Price</Link>
        </div>
    )
}

export default Header;
