import {Link} from "react-router-dom";
import React from "react";

const Nav = () => {
    return (
        <div>
            <nav className="navbar navbar-light">
                <ul className="nav navbar-nav">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/synoptic">Synoptic data</Link>
                    </li>
                    <li>
                        <Link to="/hydrological">Hydrological data</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;