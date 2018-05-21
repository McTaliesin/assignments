import React from "react";
import "./styles.css";
import {Link} from "react-router-dom";


function Header() {
    return (
        <div className="headerBar">
            <Link className="headerLink" to="/">#Home </Link>
            <p></p>
            <Link className="headerLink" to="/favorites"> #Favorites</Link>
        </div>
    )
}

export default Header;
