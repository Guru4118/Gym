import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "./img/LOGO.png";

function Navi() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="navi">
            <nav>
                <div className="menu-header">
                    <button className="menu-toggle" onClick={toggleMenu}>
                        ☰
                    </button>
                    <span className="gym-name">Y-NOT</span>
                </div>
                <ul className={menuOpen ? 'open' : ''}>
                    <li id='logo'><a href="https://www.linkedin.com/in/guruprasath103/" target='new'>GP</a></li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/locator">Gym Locator</Link></li>
                    <li><Link to="/franchise">Franchise</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navi;
