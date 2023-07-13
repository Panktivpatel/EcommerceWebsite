import React, { useState } from "react";

import "../../css/Constant/NavBar.css";

const NavBar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
      
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };      

    return (
        <div className="navbar">
            <div className="navbar-brand">
                <button className="navbar-toggle" onClick={toggleMenu}>
                <img className="navbar-toggle-icon" src=""/>
                </button>
            </div>
            <div>
            <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
                    <li className="navbar-item">Home</li>
                    <li className="navbar-item"> Our Products</li>
                    <li className="navbar-item">New Arrivals</li>
                    <li className="navbar-item">Deals</li>
                    <li className="navbar-item">Contact Us</li>
                    <li className="navbar-item">
                    <button className="navbar-toggle" onClick={toggleMenu}>
                        <span className="navbar-toggle-icon">Login</span>
                    </button>
                    </li>
                    <li className="navbar-item">Cart</li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;