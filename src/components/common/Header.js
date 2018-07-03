import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
    return (
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <ul className="nav navbar-nav">
                    <li><img width="70" src={require("./cricket.png")}/></li>
                    <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
                    <li><Link to="/teams" activeClassName="active">Teams</Link></li>
                    <li><Link to="/about" activeClassName="active">About</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;