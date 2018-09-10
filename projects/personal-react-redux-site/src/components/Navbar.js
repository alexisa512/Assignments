import React from "react";
import { Link } from "react-router-dom";

function Navbar (props) {
    return (
        <div className="navbar">
            <Link to="/">Home</Link>
            <a href="https://en.wikipedia.org/wiki/Chuck_Norris">Bio</a>
            <Link to="/gallery">Gallery</Link>
        </div>
    )
}

export default Navbar;