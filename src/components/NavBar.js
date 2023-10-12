import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <div className="container">
                <Link to="/">ClimatCoin</Link>
                <Link to="/marketplace">Marketplace</Link>
                <Link to="/profile">Profile</Link>
            </div>
        </nav>
    );
}

export default NavBar;
