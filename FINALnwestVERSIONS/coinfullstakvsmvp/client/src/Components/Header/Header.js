import React from "react";
import "./styles.css";
import {Link} from "react-router-dom";


function Header() {
    return (
        <div className="headerBar">
            <Link className="headerLink" to="/">Currency Rankings</Link>
            <p></p>
            <Link className="headerLink" to="/previous">Previous Rankings</Link>
        </div>
    )
}

export default Header;
